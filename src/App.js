import React from 'react';
import styled, { css } from 'styled-components';

export default class Draggable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDragging: false,

      originalX: 0,
      originalY: 0,

      translateX: 0,
      translateY: 0,

      lastTranslateX: 0,
      lastTranslateY: 0,

      clickedWordID: null,

      feelings: [
          {id: 1, emotion: "happy", weight: 8.3},
          {id: 2, emotion: "sad", weight: 8.3},
          {id: 3, emotion: "optimistic", weight: 8.3},
          {id: 4, emotion: "fearful", weight: 8.3},
          {id: 5, emotion: "depressed", weight: 8.3},
          {id: 6, emotion: "worried", weight: 8.3},
          {id: 7, emotion: "stressed", weight: 8.3},
          {id: 8, emotion: "anxious", weight: 8.3},
          {id: 9, emotion: "confident", weight: 8.3},
          {id: 10, emotion: "valued", weight: 8.3},
          {id: 11, emotion: "frustrated", weight: 8.3},
          {id: 12, emotion: "peckish", weight: 8.3}
        ],
    };

    this.doAThing  = this.doAThing.bind(this);
}

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  doAThing({clientX, clientY}) {
    console.log('do a thing');
    console.log('points', clientX, clientY);

    //REF PROBLEM!!!
    this.feelingElement.focus()

    // how to pass in this ref to handleMouseDown?
    // this.feelingElement.handleMouseDown(clientX, clientY)
  }

  //  PASSING IN ID PROBLEM
  handleMouseDown = ( {clientX, clientY}, id) => {
    console.log('id', id);
    console.log('handleMouseDown');

    if ( true ) {

    window.addEventListener('mousemove',this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
    if (this.props.onDragStart) {
    //  a subscriber for the beginning of the drag interaction.
      this.props.onDragStart();
    }

    this.setState({
      originalX: clientX,
      originalY: clientY,
      isDragging: true
    });
  }
};

  handleMouseMove = ({ clientX, clientY }) => {
    const { isDragging } = this.state;
    const { onDrag } = this.props;

    if (!isDragging) {
      return;
    }

    this.setState(prevState => ({
      translateX: clientX - prevState.originalX + prevState.lastTranslateX,
      translateY: clientY - prevState.originalY + prevState.lastTranslateY
    }), () => {
      if (onDrag) {
        // a subscriber to get the [x,y] translation of the dragged element.
        onDrag({
          translateX: this.state.translateX,
          translateY: this.state.translateY
        });
      }
    });
  };

  handleMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    this.setState(
      {
        originalX: 0,
        originalY: 0,
        lastTranslateX: this.state.translateX,
        lastTranslateY: this.state.translateY,

        isDragging: false
      },
      () => {
        if (this.props.onDragEnd) {
          // a subscriber for the end.
          this.props.onDragEnd();
        }
      }
    );
  };

  render() {
    const { children } = this.props;
    const { translateX, translateY, isDragging } = this.state;

    return (
      <div className="parent">
        {this.state.feelings.map( (feeling, id) => {
          return <Container     //styled component
          key={feeling.id}

          ref={(feelingEl) => {this.feelingElement = feelingEl}}

          // onMouseDown={(clientX, clientY) =>  this.doAThing(clientX, clientY)}

          onMouseDown={(clientX, clientY) =>  this.handleMouseDown(clientX, clientY, feeling.id )}

          x={translateX}
          y={translateY}
          isDragging={isDragging}
          style={{fontSize: '38px'}}
          >
          {feeling.emotion} ID:  {feeling.id}
          {children}
        </Container>
        })}
      </div>
    );
  }
}

 // styled components
const Container = styled.div.attrs({
  style: ({ x, y }) => ({
    transform: `translate(${x}px, ${y}px)`
  }),
})`
  cursor: grab;
  border: 2px solid blue;
  width: 300px;
  height: 50px;
  margin-top: 10px;
  margin-left: 10px;
  &:focus {background-color: aliceblue;}

  ${({ isDragging }) =>
  isDragging && css`
    opacity: 0.8;
    cursor: grabbing;
  `};
`;

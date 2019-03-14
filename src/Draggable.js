import React from 'react';
import styled, { css } from 'styled-components';

export default class Draggable extends React.Component {
state = {
      isDragging: false,

      originalX: 0,
      originalY: 0,

      translateX: 0,
      translateY: 0,

      lastTranslateX: 0,
      lastTranslateY: 0,

      clickedElementID: null,
    };


  componentDidMount() {
    console.log('didmount');
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  // toggle = (id) => {
  //   console.log("Toggle: hovered on id", id);
  //   // this.setState((prevState) =>({clickedElementID : id}))
  //   this.setState({clickedElementID : id})
  // }


  handleMouseDown = ({ clientX, clientY }) => {
    console.log('clickedElementID:', this.state.clickedElementID);

    window.addEventListener('mousemove',this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);

    // only want to move one elemet: if clickedElementID equals id of element
    // && clickedElementID == id
    if (this.props.onDragStart ) {
    //  a subscriber for the beginning of the drag interaction.
      this.props.onDragStart();
    }

    this.setState({
      originalX: clientX,
      originalY: clientY,
      isDragging: true
    });
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
          // a subscriber for the end of drag
          this.props.onDragEnd();
        }
      }
    );
  };

  render() {
  const { children } = this.props;
  const { translateX, translateY, isDragging } = this.state;

    return (
      <Container
        onMouseDown={this.handleMouseDown}
        x={translateX}
        y={translateY}
        isDragging={isDragging}
      >
        {children}
      </Container>
    );
  }
  }

 // styled component
const Container = styled.div.attrs({
  style: ({ x, y }) => ({
    transform: `translate(${x}px, ${y}px)`
  }),
})`
  display: flex;
${'' /* block */}
  cursor: grab;
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

import React from 'react';
import styled, { css } from 'styled-components';

export default class Draggable extends React.Component {
state = {
      isDragging: false,

      //starting point
      originalX: 0,
      originalY: 0,

      //
      translateX: 0,
      translateY: 0,

      // where is was before
      lastTranslateX: 0,
      lastTranslateY: 0,

      clickedElementID: null,
    };




  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }


  handleMouseDown = ({ clientX, clientY }) => {
    window.addEventListener('mousemove',this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);

    if (this.props.onDragStart ) {
    //  a subscriber for the beginning of the drag interaction.
      this.props.onDragStart();
    }
    //console.log("Setting state in dragable "+clientX+" "+clientY);

    this.setState({
      originalX: clientX,
      originalY: clientY,
      isDragging: true
    });
};


handleMouseMove = ({ clientX, clientY }) => {
    const { isDragging } = this.state;
    const { onDrag } = this.props;

    const distance = () => {
      console.log('state', this.state);
      const x =  this.state.translateX
      const y = this.state.translateY
      console.log('x', x);
      console.log('y', y);

      return Math.sqrt( ( x * x ) + (y * y) )

    }

    console.log("distance", distance());


    if (!isDragging) {
      return;
    }



    // square root of (xA - xB) + (yB - yA)
    // gives how much distance a petal has travelled
    //then, change it's height based on a ratio of distance and the size of the yellow circle

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
  cursor: grab;
  width: 300px;
  height: 50px;
  margin: 0;
  position: absolute;

  &:focus {background-color: aliceblue;}

  ${({ isDragging }) =>
  isDragging && css`
    opacity: 0.8;
    cursor: grabbing;
  `};
`;

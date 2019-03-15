import React, { Component } from 'react';
import './Emotions.css';
import Draggable from './Draggable';


class Emotions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [
        {id: 1, emotion: "happy 1", weight: 8.3},
        {id: 2, emotion: "sad 2", weight: 8.3},
        {id: 3, emotion: "optimistic 3", weight: 8.3},
        {id: 4, emotion: "fearful 4", weight: 8.3},
        {id: 5, emotion: "depressed 5", weight: 8.3},
        {id: 6, emotion: "worried 6", weight: 8.3},
        {id: 7, emotion: "stressed 7", weight: 8.3},
        {id: 8, emotion: "anxious 8", weight: 8.3},
        {id: 9, emotion: "confident 9", weight: 8.3},
        {id: 10, emotion: "valued 10", weight: 8.3},
        {id: 11, emotion: "frustrated 11", weight: 8.3},
        {id: 12, emotion: "peckish 12", weight: 8.3}
      ],
      clickedWordID: null,
      weight: 'banana',
    };

  }


  toggle = (index) => {
    if (this.state.clickedWordID === index) {
      this.setState({clickedWordID : null})
    } else {
      this.setState({clickedWordID : index})
    }
    // this.changeWeight(index);
  };

  // changeWeight = (index) => {
  //   // filter array by index or id
  //   // only change weight of filtered object
  //   if ( this.state.clickedWordID === index ) {
  //   console.log(this.state.words.weight);
  // }
  //   // this.setState({weight: 'pineapple'})
  //   //
  //   // this.setState({ weight: this.state.words.weight + 5 })
  //   console.log("emotion & weight:", this.state.words.emotion, this.state.words.weight);
  // }

  changeClickedColor = (index) => {
    if (this.state.clickedWordID === index) {
      return "deepskyblue";
    }
    return "";
  };

  changeFontSize = (index) => {
    if (this.state.clickedWordID === index) {
      return "34px";
    } else if (this.state.clickedWordID === null) {
       return "24px";
     } else {
       return "18px";
     }
  };

  changeElementHeight = (index) => {
    if (this.state.clickedWordID === index) {
      return "50px";
    } else if (this.state.clickedWordID === null) {
      return "40px";
    } else {
      return "20px";
    }
  };

   calcCircleCoords = (ratio, midX, midY, radius) => {
     // radiens: 2*Math.PI*ratio
     // rotating always uses sin and cos
     // sin & cos 90 degress out (X and Y)
     // ratio is angle
    const xOff =  Math.cos(2*Math.PI*ratio);
    const yOff =  Math.sin(2*Math.PI*ratio);
    const x = midX + (radius * xOff);
    const y = midY + (radius * yOff);

    // this.setState ({
    //   midX:
    //   midY:
    //   radius:
    // })

    return { x:x, y:y };
  }

  // get length of words array
  rotateElements = (index) => {
    console.log(this.state.words.length)
    const ratio = index / this.state.words.length

    console.log('rotate({ratio}turn)', ratio);
    const thang = this.calcCircleCoords(ratio, 350,200,150);
    return 'translate('+thang.x+'px, '+thang.y+'px) rotate('+(ratio)+'turn)'
  }


  render() {
    return (
      <div className="parent-container">
        <div className="circle"/>

        {this.state.words.map( (word, index) => {
          return <Draggable key={word.id}>
            <div
            className="draggable"
            id={word.id}
            onClick={() => { this.toggle(index) }}
            onMouseDown={this.handleMouseDown}
            style={{
              background: this.changeClickedColor(index),
              fontSize: this.changeFontSize(index),
              height: this.changeElementHeight(index),
              position: 'absolute',
              top : word.id,
              left : word.id,
              transform: this.rotateElements(index),
            }}>
            {word.emotion}
          </div>
        </Draggable>
        })}
      </div>

    )
  }
}

export default Emotions;



/* rotateElements = (index) => {
  // translate: num along x axis, num along y axis.
  if (index === 0) {
    return 'rotate(270deg) translate(-150px, 230px)'
  } if (index === 1) {
    return 'rotate(300deg) translate(-20px, 300px)'
  } if (index === 2) {
  } if (index === 3) {
    return 'rotate(0deg) translate(220px, 305px)'
  } if (index === 4) {
    return 'rotate(30deg) translate(315px, 265px)'
  }  if (index === 5) {
    return 'rotate(60deg) translate(400px, 203px)'
  }  if (index === 6) {
    return 'rotate(90deg) translate(470px, 115px)'
  }  if (index === 7) {
    return 'rotate(300deg) translate(-520px, -0px)'
  }  if (index === 8) {
    return 'rotate(320deg) translate(-545px, 65px)'
  } if (index === 9) {
    return 'rotate(0deg) translate(-460px, 305px)'
  } if (index === 10) {
    return 'rotate(30deg) translate(-315px, 440px)'
  } if (index === 11) {
    return 'rotate(60deg) translate(-100px, 508px)'
  }
};
*/

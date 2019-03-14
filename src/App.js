import React from 'react';
import styled, { css } from 'styled-components';
import Draggable from './Draggable';
import Happy from './Emotions/Happy';
import Sad from './Emotions/Sad';
import Optimistic from './Emotions/Optimistic';
import Fearful from './Emotions/Fearful';
import Depressed from './Emotions/Depressed';
import Worried from './Emotions/Worried';
import Stressed from './Emotions/Stressed';
import Anxious from './Emotions/Anxious';
import Confident from './Emotions/Confident';
import Valued from './Emotions/Valued';
import Frustrated from './Emotions/Frustrated';
import Angry from './Emotions/Angry';




export default class App extends React.Component {

  render() {
    return (
      <div>
        <Draggable>
          <Happy />
        </Draggable>

        <Draggable>
          <Sad />
        </Draggable>

        <Draggable>
          <Optimistic />
        </Draggable>

        <Draggable>
          <Fearful />
        </Draggable>

        <Draggable>
          <Depressed />
        </Draggable>

        <Draggable>
          <Worried />
        </Draggable>

        <Draggable>
          <Stressed />
        </Draggable>

        <Draggable>
          <Anxious />
        </Draggable>

        <Draggable>
          <Confident />
        </Draggable>

        <Draggable>
          <Valued />
        </Draggable>

        <Draggable>
          <Frustrated />
        </Draggable>

        <Draggable>
          <Angry />
        </Draggable>
      </div>
    );
  }
}

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
import Emotions from './Emotions/Emotions';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Draggable>
          <Emotions />
        </Draggable>
      </div>
    );
  }
}

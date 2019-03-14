import React from 'react';
import styled, { css } from 'styled-components';


export default class Happy extends React.Component {
   render() {
     return(
       <div>Happy</div>
     )
   }

}


//
// state = {
//
//   feelings: [
//       {id: 1, emotion: "happy", weight: 1},
//       {id: 2, emotion: "sad", weight: 1},
//       {id: 3, emotion: "optimistic", weight: 1},
//       {id: 4, emotion: "fearful", weight: 1},
//       {id: 5, emotion: "depressed", weight: 1},
//       {id: 6, emotion: "worried", weight: 1},
//       {id: 7, emotion: "stressed", weight: 1},
//       {id: 8, emotion: "anxious", weight: 1},
//       {id: 9, emotion: "confident", weight: 1},
//       {id: 10, emotion: "valued", weight: 1},
//       {id: 11, emotion: "frustrated", weight: 1},
//       {id: 12, emotion: "angry", weight: 1}
//     ],
// }
//
// render() {
//   return(
//     <div>
//     {this.state.feelings.map( (feeling, index) => {
//       return (
//         <ul>
//           {feeling.emotion} ID: {feeling.id}
//         </ul>
//       )
//       })}
//     </div>
//   )

import React from 'react';
import Box from './Box.js';

let counter1 = 0;
let counter2 = 0;
export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      boxes: []
    };
  }

  // setTimeout(() => {
  //   DataToPlayer.getGame().then(result => {
  //     let gameState = result;
  //     if (result.gameState !== undefined) {
  //       gameState = result.gameState;
  //       gameState.player = result.player;
  //     }

  //     this.setState(gameState);
  //   })
  //   this.updateState()
  //   }, 5000);

  componentWillMount() {
    this.setBoxes();
  }

  setBoxes() {
    const boxes = [...this.state.boxes];
    if(counter2 === 100) {
      counter1 = 0;
      counter2 = 0;
    }

    if (counter1 < 100) {
      setTimeout(() => {
        boxes.push("0")
        counter1++;
        this.setState({ boxes })
        this.setBoxes()
      }, 30);
    } else if (counter2 < 100) {
      setTimeout(() => {
        boxes.pop()
        counter2++;
        this.setState({ boxes })
        this.setBoxes()
      }, 30);
    }
  }


  renderBoxes() {
    return (
      this.state.boxes.map((cell, index) => {
        return (<Box key={index} index={index}/>)
      })
    )
  }



  render() {
    return (
      <div className="container">
        {this.renderBoxes()}
      </div>
    )
  }
}
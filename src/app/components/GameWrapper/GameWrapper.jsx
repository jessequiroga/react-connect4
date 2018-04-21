import React from 'react';
import GameContainer from '../Game/GameContainer.js';
import SettingsContainer from '../Settings/SettingsContainer.js';
import './GameWrapper.scss'

export default class GameWrapper extends React.Component {
  constructor() {
    super();
    //§store
    // this.state = {
      // config: {
      //   lineLength: 4,
      //   cols: 7,
      //   rows: 6,
      //   player1: 'Player 1',
      //   player2: 'Player 2'
      // },
      // gameStart: false
    // };
  }

  // setConfig(name, value) {
  //   var config = this.state.config;
  //   config[name] = value;
  //   this.setState({
  //     config: config
  //   });
  // };

  // setGameStart() {
  //   this.setState({
  //     gameStart: true
  //   });
  // };
  //
  // setGameStop() {
  //   this.setState({
  //     gameStart: false
  //   });
  // };

  render() {
    const { gameStarted, startGame, stopGame } = this.props
    return (
      <div className="component__gamewrapper">
        <h1>Connect Four</h1>
        { gameStarted ?
          <GameContainer onGameStop={ stopGame } /> :
          <SettingsContainer onGameStart={ startGame } />
        }
       <div id="copyright">created by Christa & Christina</div>

      </div>);
  }
}

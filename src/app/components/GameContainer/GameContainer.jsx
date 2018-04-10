import React from 'react';
import Game from '../Game/Game.jsx';
import Settings from '../Settings/Settings.jsx';
import './GameContainer.scss'

export default class GameContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      config: {
        lineLength: 4,
        cols: 7,
        rows: 6,
        player1: 'Player 1',
        player2: 'Player 2'
      },
      gameStart: false
    };
  }

  setConfig(name, value) {
    var config = this.state.config;
    config[name] = value;
    this.setState({
      config: config
    });
  };

  setGameStart() {
    this.setState({
      gameStart: true
    });
  };

  setGameStop() {
    this.setState({
      gameStart: false
    });
  };

  render() {
    return (
      <div className="component__gamecontainer">
        <h1>Connect Four</h1>
         
        {this.state.gameStart ?   
          <Game config={this.state.config} onGameStop={this.setGameStop.bind(this)}/> : 
          <Settings
            onGameStart={this.setGameStart.bind(this)}
            onSave={this.setConfig.bind(this)}
            config={this.state.config}/> 
        }
       <div id="copyright">created by Christa & Christina</div>

      </div>);
  }
}
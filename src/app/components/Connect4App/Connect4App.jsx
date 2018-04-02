import React from 'react';
import Connect4Game from '../Connect4Game/Connect4Game.jsx';
import Connect4Setting from '../Connect4Setting/Connect4Setting.jsx';
import './Connect4App.scss'

export default class Connect4App extends React.Component {
  constructor() {
    super();
    this.state = {
      config: {
        length: 4,
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

    console.log(this.state.config);
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
     <div className="app">
        {this.state.gameStart ?   
          <Connect4Game config={this.state.config} onGameStop={this.setGameStop.bind(this)}/> : 
          <Connect4Setting 
            onGameStart={this.setGameStart.bind(this)}
            onSave={this.setConfig.bind(this)}
            config={this.state.config}/> 
        }
      
      </div>);
  }
}
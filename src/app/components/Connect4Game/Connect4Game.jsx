import React from 'react';
import Connect4Introduction from '../Connect4Introduction/Connect4Introduction.jsx';
import Connect4Board from '../Connect4Board/Connect4Board.jsx';
import Connect4Message from '../Connect4Message/Connect4Message.jsx';
import './Connect4Game.scss'

export default class Connect4Game extends React.Component {

  initBoard(cols, rows) {
    const board = [];
    for (let i = 0; i < cols; i++) {
      board[i] = [];
      for (let j = 0; j < rows; j++) {
        board[i][j] = null;
      }
    }
    return board;
  }

  currentPlayerName(){
    if(this.state.currPlayer == 1)
      return this.props.config.player1;
    return this.props.config.player2;
  }

  insertToken(col){
    console.log("Click " + col);
  }

  componentWillMount() {
    const board = this.initBoard(this.props.config.rows, this.props.config.cols);
    this.setState({
      showInstructions: false,
      board,
      currPlayer: 1,
      game_state: "_RUNNING"
    });
  }

  toggleInstructions() {
    this.setState({
      showInstructions: !this.state.showInstructions
    });
  }

  render() {
    return (
      <div className="connect4__game">

        <Connect4Board state={this.state.state} 
            onInsertToken={this.insertToken}
            board={this.state.board} 
            config={this.props.config}/>


        <div className="connect4__message">
          {this.state.game_state === '_RUNNING' && (
            <Connect4Message currPlayer={this.currentPlayerName.bind(this)()}/>
          )}

          {this.state.game_state === '_GameOver' && (
            <p>{this.currentPlayerName.bind(this) } win</p>
          )}
        </div>


        <div className="btn__container">
          <button className="btn__primary btn__small" onClick={this.props.onGameStop}>
            <i className="fa fa-cogs fa-lg" aria-hidden="true"></i>
          </button>
          <button className="btn__primary btn__medium">
            Restart <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
          <button className="btn__primary btn__small" onClick={this.toggleInstructions.bind(this)}>
            <i className="fa fa-info-circle fa-lg" aria-hidden="true"></i>
          </button>
        </div>
        
        {this.state.showInstructions ? 
            <Connect4Introduction closePopup={this.toggleInstructions.bind(this)} /> : null
        }
        
      </div>);
  }
}
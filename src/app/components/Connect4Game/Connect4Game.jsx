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

  restart(){
    const board = this.initBoard(this.props.config.rows, this.props.config.cols);
    this.setState({
      showInstructions: false,
      board,
      currPlayer: 1,
      game_state: "_RUNNING"
    });
  }

  currentPlayerName(){
    if(this.state.currPlayer == 1)
      return this.props.config.player1;
    return this.props.config.player2;
  }

  insertToken(col){
    let player = 3-this.state.currPlayer
    let game_state = "_RUNNING"
    let board = this.cloneBoard(this.state.board);
    const row = this.getTokenRow(board, col);
    board[row][col] = player

    this.setState({
      currPlayer: player,
      game_state: game_state,
      board: board
    });
  }

  getTokenRow(board, col) {
    let row = board.length - 1;
    while(board[row][col]) {
      row--;
    }
    return row;
  }

  cloneBoard(board) {
    return board.map(row => [...row]);
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
            onInsertToken={this.insertToken.bind(this)}
            board={this.state.board} 
            config={this.props.config}/>


        <div className="connect4__message">
          {this.state.game_state === '_RUNNING' && (
            <Connect4Message message="Current Player: " currPlayer={this.currentPlayerName.bind(this)()}/>
          )}

          {this.state.game_state === '_GAMEOVER' && (
            <Connect4Message message="Winner is: " currPlayer={this.currentPlayerName.bind(this)()}/>
          )}
        </div>


        <div className="btn__container">
          <button className="btn__primary btn__small" onClick={this.props.onGameStop}>
            <i className="fa fa-cogs fa-lg" aria-hidden="true"></i>
          </button>
          <button className="btn__primary btn__medium" onClick={this.restart.bind(this)}>
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
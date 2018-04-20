import React from 'react';
import Introduction from '../Introduction/Introduction.jsx';
import Board from '../Board/Board.jsx';
import Status from '../Status/Status.jsx';
import './Game.scss'

export default class Game extends React.Component {
  constructor(props){
    super(props);
    const board = this.initBoard(this.props.config.rows, this.props.config.cols);
    this.state = {
      board,
      currPlayer: 1,
      game_state: "_RUNNING"
    };
  }

  restart(){
    const board = this.initBoard(this.props.config.rows, this.props.config.cols);
    this.setState({
      board,
      currPlayer: 1,
      game_state: "_RUNNING"
    });
  }

  /*    BOARD   */
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

  getAvailableToken(col) {
    let row = this.state.board.length - 1;
    while(this.state.board[row][col]) {
      row--;
    }
    return row;
  }

  currentPlayerName(){
    if(this.state.currPlayer == 1)
      return this.props.config.player1;
    return this.props.config.player2;
  }

  switchPlayer(){
    this.setState({
      currPlayer: 3-this.state.currPlayer
    });
  }

  markWinnerToken(board, isConnect4){
    for (var i = 0; i < isConnect4.length; i++) {
      var token = isConnect4[i];
      board[token.rowIndex][token.columnIndex] = -board[token.rowIndex][token.columnIndex]; //mark this as winnerToken
    }
    return board
  }


  insertToken(col){
    let player = this.state.currPlayer;
    let game_state = "_RUNNING";
    let board = this.state.board;
    let row = this.getAvailableToken(col);
    board[row][col] = player

    let isConnect4 = this.checkMatch(player, col, row, board);
    let isFieldFull = this.checkFieldFull(board);
    if(isConnect4){
      board = this.markWinnerToken(board, isConnect4);
      game_state = '_GAMEOVER'
    } else if(isFieldFull){
      game_state = '_FIELDFULL'
    }
    else {
      this.switchPlayer();
    }

    this.setState({
      game_state: game_state,
      board: board
    });
  }

  checkFieldFull(board){
    return board.every(elem => !elem.includes(null));
  }

  checkMatch(player, colIndex, rowIndex, board){
    let gameOver = false;
    let winningTokens = [];
    gameOver |= this._checkInDirection(winningTokens, player, colIndex, rowIndex, 1, 0, "horizontal", board);
    gameOver |= this._checkInDirection(winningTokens, player, colIndex, rowIndex, 0, 1, "vertical", board);
    gameOver |= this._checkInDirection(winningTokens, player, colIndex, rowIndex, 1, 1, "upwards", board);
    gameOver |= this._checkInDirection(winningTokens, player, colIndex, rowIndex, -1, 1, "downwards", board);

    if (gameOver) {
      return winningTokens;
    }
    return false;
  }

  _checkInDirection(allTokens, symbol, columnIndex, rowIndex, dColumnIndex, dRowIndex, directionLabel, board) {
        var maxLineLength = this.props.config.lineLength;
        var tokens = [
            { columnIndex:columnIndex, rowIndex:rowIndex }
        ];

        // check the one direction
        var lineLength = this._checkInDirectionRec(tokens, symbol, columnIndex, rowIndex,
            dColumnIndex, dRowIndex, maxLineLength - 2, board);
        // subtract 1 for the "own" token, minus one for the recursion


        //add 1 for own token, substract 2 for "own" token, minus one for recursion
        lineLength += 1 + this._checkInDirectionRec(tokens, symbol, columnIndex, rowIndex,
            -dColumnIndex, -dRowIndex, maxLineLength - 2 - lineLength, board);

        // if a line is found, copy its tokens to the referenced array
        if (lineLength >= maxLineLength) {
            for (var i = 0; i < tokens.length; i++) {
                allTokens.push(tokens[i]); // do not use concat, we do not want to have a new "allTokens" in memory
            }
            return true;
        }

        return false;
    }

    _checkInDirectionRec(tokens, symbol, columnIndex, rowIndex, dColumnIndex, dRowIndex, remainingLineLength, board) {
        // out of bounds
        columnIndex += dColumnIndex;
        rowIndex += dRowIndex;

        // if game boundary is reached
        if (columnIndex < 0 || columnIndex >= this.props.config.cols
            || rowIndex < 0 || rowIndex >= this.props.config.rows)
            return 0;

        // no match (end of the line):
        if (symbol != board[rowIndex][columnIndex])
            return 0;

        tokens.push({ columnIndex:columnIndex, rowIndex:rowIndex });

        // matching, but line is long enough
        if (remainingLineLength <= 0)
            return 1;

        // matching, continue:
        return 1 + this._checkInDirectionRec(tokens, symbol, columnIndex, rowIndex,
            dColumnIndex, dRowIndex, remainingLineLength - 1, board);

    }

  render() {
    const { showIntroduction, toggleIntroduction } = this.props
    return (
      <div className="component__game">

        <Board gameRunning={ this.state.game_state == '_RUNNING' }
            onInsertToken={ this.insertToken.bind(this) }
            board={ this.state.board }
            currPlayer={ this.state.currPlayer }/>


        <div className="component__status">
          {this.state.game_state === '_RUNNING' && (
            <Status message="Current Player: " currPlayer={ this.currentPlayerName.bind(this)() }/>
          )}

          {this.state.game_state === '_GAMEOVER' && (
            <Status message="Winner is: " currPlayer={ this.currentPlayerName.bind(this)() }/>
          )}

          {this.state.game_state === '_FIELDFULL' && (
            <Status message="Field is full! " currPlayer="No Winner"/>
          )}

        </div>

        <div className="btn__container">
          <button className="btn__primary btn__small" onClick={ this.props.onGameStop }>
            <i className="fa fa-cogs fa-lg" aria-hidden="true"></i>
          </button>
          <button className="btn__primary btn__medium" onClick={ this.restart.bind(this) }>
            Restart <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
          <button className="btn__primary btn__small" onClick={ toggleIntroduction }>
            <i className="fa fa-info-circle fa-lg" aria-hidden="true"></i>
          </button>
        </div>

        <p data-show={ showIntroduction }>show</p>

        { showIntroduction ?
            <Introduction closePopup={ toggleIntroduction } /> : null
        }

      </div>);
  }
}

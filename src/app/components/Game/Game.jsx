import React from 'react';
import Introduction from '../Introduction/Introduction.jsx';
import BoardContainer from '../Board/BoardContainer.js';
import Status from '../Status/Status.jsx';
import './Game.scss'

export default class Game extends React.Component {
  constructor(props){
    super(props)
    this.initBoard()
  }

  restart(){
    this.initBoard()
    this.props.setGameStatus('running')
  }

  initBoard() {
    let board = [];
    for (let i = 0; i < this.props.rowNum; i++) {
      board[i] = [];
      for (let j = 0; j < this.props.colNum; j++) {
        board[i][j] = null;
      }
    }
    this.props.initBoard(board)
  }

  getAvailableToken(col) {
    let row = this.props.board.length - 1;
    while(this.props.board[row][col]) {
      row--;
    }
    return row;
  }

  currentPlayerName(){
    if(this.props.currPlayer == 1) return this.props.player1;
    else return this.props.player2;
  }

  markWinnerToken(board, isConnect4){
    for (var i = 0; i < isConnect4.length; i++) {
      var token = isConnect4[i];
      board[token.rowIndex][token.columnIndex] = -board[token.rowIndex][token.columnIndex]; //mark this as winnerToken
    }
    return board
  }


  insertToken(col){
    // let player = this.props.currPlayer;
    this.props.setGameStatus('running')
    let board = this.props.board;
    let row = this.getAvailableToken(col);
    // this.props.insertToken(row, col, player)
    // console.log(this.props)
    board[row][col] = this.props.currPlayer
    this.props.insertToken(board)

    let isConnect4 = this.checkMatch(col, row);
    let isFieldFull = this.checkFieldFull();
    if(isConnect4){
      board = this.markWinnerToken(board, isConnect4);
      this.props.setGameStatus('gameover')
    }
    else if(isFieldFull){
      this.props.setGameStatus('fieldfull')
    }
    else {
      this.props.setCurrentPlayer(this.props.currPlayer)
    }
  }

  checkFieldFull(){
    return this.props.board.every(elem => !elem.includes(null));
  }

  checkMatch(colIndex, rowIndex){
    let gameOver = false;
    let winningTokens = [];
    gameOver |= this._checkInDirection(winningTokens, colIndex, rowIndex, 1, 0, "horizontal");
    gameOver |= this._checkInDirection(winningTokens, colIndex, rowIndex, 0, 1, "vertical");
    gameOver |= this._checkInDirection(winningTokens, colIndex, rowIndex, 1, 1, "upwards");
    gameOver |= this._checkInDirection(winningTokens, colIndex, rowIndex, -1, 1, "downwards");

    if (gameOver) {
      return winningTokens;
    }
    return false;
  }

  _checkInDirection(allTokens, columnIndex, rowIndex, dColumnIndex, dRowIndex, directionLabel) {
        var maxLineLength = this.props.lineLength;
        var tokens = [
            { columnIndex:columnIndex, rowIndex:rowIndex }
        ];

        // check the one direction
        var lineLength = this._checkInDirectionRec(tokens, columnIndex, rowIndex,
            dColumnIndex, dRowIndex, maxLineLength - 2);
        // subtract 1 for the "own" token, minus one for the recursion


        //add 1 for own token, substract 2 for "own" token, minus one for recursion
        lineLength += 1 + this._checkInDirectionRec(tokens, columnIndex, rowIndex,
            -dColumnIndex, -dRowIndex, maxLineLength - 2 - lineLength);

        // if a line is found, copy its tokens to the referenced array
        if (lineLength >= maxLineLength) {
            for (var i = 0; i < tokens.length; i++) {
                allTokens.push(tokens[i]); // do not use concat, we do not want to have a new "allTokens" in memory
            }
            return true;
        }

        return false;
    }

    _checkInDirectionRec(tokens, columnIndex, rowIndex, dColumnIndex, dRowIndex, remainingLineLength) {
        // out of bounds
        columnIndex += dColumnIndex;
        rowIndex += dRowIndex;

        // if game boundary is reached
        if (columnIndex < 0 || columnIndex >= this.props.colNum
            || rowIndex < 0 || rowIndex >= this.props.rowNum)
            return 0;

        // no match (end of the line):
        if (this.props.currPlayer != this.props.board[rowIndex][columnIndex]) return 0

        tokens.push({ columnIndex:columnIndex, rowIndex:rowIndex });

        // matching, but line is long enough
        if (remainingLineLength <= 0)
            return 1;

        // matching, continue:
        return 1 + this._checkInDirectionRec(tokens, columnIndex, rowIndex,
            dColumnIndex, dRowIndex, remainingLineLength - 1);

    }

  render() {
    console.log(this.props)
    if(this.props.ready) {
      return (
        <div className="component__game">
          <BoardContainer
            onInsertToken={ this.insertToken.bind(this) }
            board={ this.props.board }
            currPlayer={ this.props.currPlayer }
            />

          <div className="component__status">
            { this.props.gameStatus === 'running' && (
              <Status message="Current Player: " currPlayer={ this.currentPlayerName.bind(this)() }/>
            )}

            { this.props.gameStatus === 'gameover' && (
              <Status message="Winner is: " currPlayer={ this.currentPlayerName.bind(this)() }/>
            )}

            { this.props.gameStatus === 'fieldfull' && (
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
          <button className="btn__primary btn__small" onClick={ this.props.toggleIntroduction }>
            <i className="fa fa-info-circle fa-lg" aria-hidden="true"></i>
          </button>
        </div>

        { this.props.showIntroduction ?
          <Introduction closePopup={ this.props.toggleIntroduction } /> : null
          }

        </div>
      )
    }
    else {
      return(<div>Loading...</div>)
    }
  }
}

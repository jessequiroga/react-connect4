import React from 'react'
import Introduction from '../Introduction/Introduction.jsx'
import BoardContainer from '../Board/BoardContainer.js'
import StatusContainer from '../Status/StatusContainer.js'
import CountdownContainer from '../Countdown/CountdownContainer.js'

export default class Game extends React.Component {
  constructor(props){
    super(props)
    this.initBoard()
  }

  restart(){
    this.props.onGameStop()
  }

  initBoard() {
    let board = []
    for (let i = 0; i < this.props.rowNum; i++) {
      board[i] = []
      for (let j = 0; j < this.props.colNum; j++) {
        board[i][j] = null
      }
    }
    this.props.initBoard(board)
  }

  getAvailableToken(col) {
    let row = this.props.board.length - 1
    while(this.props.board[row][col]) {
      row--
    }
    return row
  }

  markWinnerToken(match){
    let board = this.props.board
    for (let i = 0; i < match.length; i++) {
      let token = match[i]
      // mark this as winnerToken
      board[token.row][token.col] = -board[token.row][token.col]
    }
    this.props.updateBoard(board)
  }

  insertToken(col){
    this.props.setGameStatus('running')
    let board = this.props.board
    let row = this.getAvailableToken(col)
    board[row][col] = this.props.currPlayer
    this.props.updateBoard(board)

    let match = this.checkMatch(col, row)
    let isFull = this.checkFieldFull()

    if(match){
      this.markWinnerToken(match);
      this.props.setGameStatus('gameover')
    }
    else if(isFull){
      this.props.setGameStatus('full')
    }
    else {
      this.props.switchPlayer(this.props.currPlayer)
    }
  }

  checkFieldFull(){
    return this.props.board.every(elem => !elem.includes(null))
  }

  checkMatch(col, row){
    let gameOver = false
    let winningTokens = []
    gameOver |= this._checkInDirection(winningTokens, col, row, 1, 0, "horizontal")
    gameOver |= this._checkInDirection(winningTokens, col, row, 0, 1, "vertical")
    gameOver |= this._checkInDirection(winningTokens, col, row, 1, 1, "upwards")
    gameOver |= this._checkInDirection(winningTokens, col, row, -1, 1, "downwards")

    if (gameOver) {
      return winningTokens
    }
    return false
  }

  _checkInDirection(winningTokens, col, row, dCol, dRow, direction) {
    var maxLength = this.props.lineLength
    var tokens = [{ col: col, row: row }]

    var lineLength = this._checkInDirectionRec(tokens, col, row, dCol, dRow, maxLength-1 )
    lineLength += 1 + this._checkInDirectionRec(tokens, col, row, -dCol, -dRow, maxLength-1-lineLength)

    // if a line is found, copy its tokens to the referenced array
    if (lineLength >= maxLength) {
      for (let i = 0; i < tokens.length; i++) {
        winningTokens.push(tokens[i])
      }
      return true
    }
    return false
  }

  _checkInDirectionRec(tokens, col, row, dCol, dRow, restLength) {
    // out of bounds
    col += dCol
    row += dRow

    // if game boundary is reached
    if (col < 0 || col >= this.props.colNum || row < 0 || row >= this.props.rowNum) return 0
    // no match (end of the line)
    if (this.props.currPlayer != this.props.board[row][col]) return 0

    tokens.push({ col: col, row: row })

    return 1 + this._checkInDirectionRec(tokens, col, row, dCol, dRow, restLength-1);
  }

  render() {
    if(this.props.ready) {
      return (
        <div className="component__game">
          <BoardContainer onInsertToken={ this.insertToken.bind(this) } />

          <div className="component__status">
            <StatusContainer />
            <CountdownContainer />
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

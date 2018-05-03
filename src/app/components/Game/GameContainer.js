import { connect } from 'react-redux'
import {
  toggleIntroduction,
  switchPlayer,
  setGameStatus,
  initBoard,
  updateBoard,
  setCountdown
} from '../../actions'
import Game from './Game.jsx'

const mapStateToProps = (state) => {
  return {
    board: state.board.board,
    ready: state.board.ready,
    gameStatus: state.game.status,
    currPlayer: state.game.currPlayer,
    showIntroduction: state.introduction.show,
    player1: state.settings.player1,
    player2: state.settings.player2,
    colNum: state.settings.colNum,
    rowNum: state.settings.rowNum,
    lineLength: state.settings.lineLength,
    countdown: state.settings.countdown,
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleIntroduction: () => dispatch(toggleIntroduction()),
  switchPlayer: (player) => dispatch(switchPlayer(player)),
  setGameStatus: (status) => dispatch(setGameStatus(status)),
  initBoard: (board) => dispatch(initBoard(board)),
  updateBoard: (board) => dispatch(updateBoard(board)),
  setCountdown: (num) => dispatch(setCountdown(num))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

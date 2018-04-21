import { connect } from 'react-redux'
import {  } from '../../actions'
import Board from './Board.jsx'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    board: state.board.board,
    gameStatus: state.game.status,
    currPlayer: state.game.currPlayer,
    showIntroduction: state.introduction.show,
    player1: state.settings.player1,
    player2: state.settings.player2,
    colNum: state.settings.colNum,
    rowNum: state.settings.rowNum,
    lineLength: state.settings.lineLength,
  }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

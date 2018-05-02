import { connect } from 'react-redux'
import Board from './Board.jsx'

const mapStateToProps = (state) => {
  return {
    board: state.board.board,
    gameStatus: state.game.status,
    currPlayer: state.game.currPlayer,
  }
}

export default connect(
  mapStateToProps
)(Board)

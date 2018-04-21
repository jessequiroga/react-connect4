import { connect } from 'react-redux'
import {
  startGame,
  stopGame
} from '../../actions'
import GameWrapper from './GameWrapper.jsx'

const mapStateToProps = (state) => {
  return {
    gameStarted: state.game.started
  }
}

const mapDispatchToProps = (dispatch) => ({
  startGame: () => dispatch(startGame()),
  stopGame: () => dispatch(stopGame())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameWrapper)

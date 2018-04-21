import { connect } from 'react-redux'
import Status from './Status.jsx'

const mapStateToProps = (state) => {
  return {
    player1: state.settings.player1,
    player2: state.settings.player2,
    currPlayer: state.game.currPlayer,
    status: state.game.status
  }
}

export default connect(
  mapStateToProps
)(Status)

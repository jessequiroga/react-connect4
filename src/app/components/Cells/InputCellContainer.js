import { connect } from 'react-redux'
import InputCell from './InputCell.jsx'

const mapStateToProps = (state) => {
  return {
    currPlayer: state.game.currPlayer,
  }
}

export default connect(
  mapStateToProps
)(InputCell)

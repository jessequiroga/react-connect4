import { connect } from 'react-redux'
import {
  setPlayer1,
  setPlayer2,
  setColNum,
  setRowNum,
  setLineLength,
  setCountdown,
} from '../../actions'
import Settings from './Settings.jsx'

const mapStateToProps = (state) => {
  return {
    player1: state.settings.player1,
    player2: state.settings.player2,
    colNum: state.settings.colNum,
    rowNum: state.settings.rowNum,
    lineLength: state.settings.lineLength,
    countdown: state.settings.countdown,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPlayer1: (name) => dispatch(setPlayer1(name)),
  setPlayer2: (name) => dispatch(setPlayer2(name)),
  setColNum: (num) => dispatch(setColNum(num)),
  setRowNum: (num) => dispatch(setRowNum(num)),
  setLineLength: (num) => dispatch(setLineLength(num)),
  setCountdown: (num) => dispatch(setCountdown(num))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

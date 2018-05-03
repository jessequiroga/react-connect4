import { connect } from 'react-redux'
import {
  setCountdown
} from '../../actions'
import CountdownWrapper from './CountdownWrapper.jsx'

const mapStateToProps = (state) => {
  return {
    countdown: state.settings.countdown,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setGameStatus: (status) => dispatch(setGameStatus(status)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountdownWrapper)

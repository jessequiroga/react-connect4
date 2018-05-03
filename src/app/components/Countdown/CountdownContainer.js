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
  setCountdown: (num) => dispatch(setCountdown(num))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountdownWrapper)

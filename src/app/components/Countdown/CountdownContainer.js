import { connect } from 'react-redux'
import CountdownWrapper from './CountdownWrapper.jsx'

const mapStateToProps = (state) => {
  return {
    countdown: state.settings.countdown,
  }
}

export default connect(
  mapStateToProps,
)(CountdownWrapper)

import { connect } from 'react-redux'
import { toggleIntroduction } from '../actions'
import Game from './Game'

const mapStateToProps = (state, ownProps) => ({
  showIntroduction: ownProps.filter === state.visibilityFilter

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer)

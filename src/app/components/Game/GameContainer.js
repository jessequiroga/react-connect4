import { connect } from 'react-redux'
import { toggleIntroduction } from '../../actions'
import Game from './Game.jsx'

const mapStateToProps = (state) => {
    console.log(state)
    return {
        showIntroduction: state.introduction.show
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleIntroduction: () => dispatch(toggleIntroduction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

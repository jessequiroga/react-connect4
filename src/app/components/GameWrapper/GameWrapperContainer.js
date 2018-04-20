import { connect } from 'react-redux'
import GameWrapper from './GameWrapper.jsx'

const mapStateToProps = (state) => {
    return {
        gameStarted: state.board.gameStart,
        // colNum: state.board.colNum,
        // rowNum: state.board.rowNum,
        // lineLength: state.board.lineLength,
        // player1: state.board.player1,
        // player2: state.board.player2,
        // currentPlayer: state.board.currentPlayer
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

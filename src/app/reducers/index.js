import { combineReducers } from 'redux'
import BoardReducer from './board'
import GameReducer from './game'
import IntroductionReducer from './introduction'

const rootReducer = combineReducers({
    board: BoardReducer,
    game: GameReducer,
    introduction: IntroductionReducer,
})

export default rootReducer

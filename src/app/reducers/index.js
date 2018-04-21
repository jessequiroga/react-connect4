import { combineReducers } from 'redux'
import SettingsReducer from './settings'
import BoardReducer from './board'
import GameReducer from './game'
import IntroductionReducer from './introduction'

const rootReducer = combineReducers({
    board: BoardReducer,
    game: GameReducer,
    introduction: IntroductionReducer,
    settings: SettingsReducer
})

export default rootReducer

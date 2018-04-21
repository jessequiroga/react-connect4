import {
  START_GAME,
  STOP_GAME,
  SET_CURRENT_PLAYER,
  SET_GAME_STATUS
} from '../constants/ActionTypes'

const initialState = {
  started: false,
  currPlayer: 1,
  status: 'running'
}

export default function game (state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return Object.assign({}, game, {
        started: true,
        status: 'running',
        currPlayer: 1
      })
    case STOP_GAME:
      return Object.assign({}, game, {
        started: false
      })
    case SET_CURRENT_PLAYER:
      return Object.assign({}, game, {
        started: true,
        status: 'running',
        currPlayer: 3 - state.currPlayer
      })
    case SET_GAME_STATUS:
      return Object.assign({}, game, {
        started: true,
        status: action.status,
        currPlayer: state.currPlayer,
      })

    default:
      return state
  }
}

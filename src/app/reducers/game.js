import {
  START_GAME,
  STOP_GAME
} from '../actions/index.js'

const initialState = {
    gameStarted: false
}

export default function board (state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return Object.assign({}, introduction, {
          gameStarted: true
      })
    case STOP_GAME:
      return Object.assign({}, introduction, {
          gameStarted: false
      })

    default:
      return state
  }
}

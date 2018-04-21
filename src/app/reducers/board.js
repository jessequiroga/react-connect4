import {
  INIT_BOARD,
  INSERT_TOKEN,
} from '../constants/ActionTypes'

const initialState = {
  board: [],
  ready: false,
}

export default function board (state = initialState, action) {
  switch (action.type) {
    case INIT_BOARD:
      return Object.assign({}, board, {
        board: action.board,
        ready: true
      })
    case INSERT_TOKEN:
      return Object.assign({}, board, {
        board: action.board,
        ready: true
      })

    default:
      return state
  }
}

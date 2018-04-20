import {
  SET_COL_NUM,
  SET_ROW_NUM,
  SET_LINE_LENGTH,
  SET_PLAYER_1,
  SET_PLAYER_2
} from '../actions/index.js'

const initialState = {
    colNum: 6,
    rowNum: 7,
    lineLength: 4,
    player1: 'Player 1',
    player2: 'Player 2'
}

export default function board (state = initialState, action) {
  switch (action.type) {
    case SET_COL_NUM:
        // return Object.assign({}, introduction, {
        //     show: !state.show
        // })
    case SET_ROW_NUM:
    case SET_LINE_LENGTH:
    case SET_PLAYER_1:
    case SET_PLAYER_2:

    default:
      return state
  }
}

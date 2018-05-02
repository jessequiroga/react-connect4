import {
  SET_COL_NUM,
  SET_ROW_NUM,
  SET_LINE_LENGTH,
  SET_COUNTDOWN,
  SET_PLAYER_1,
  SET_PLAYER_2
} from '../constants/ActionTypes'
import * as values from '../constants/DefaultValues'

const initialState = {
  colNum: values.colNum,
  rowNum: values.rowNum,
  lineLength: values.lineLength,
  countdown: values.countdown,
  player1: values.player1,
  player2: values.player2
}

export default function settings (state = initialState, action) {
  switch (action.type) {
    case SET_COL_NUM:
      return Object.assign({}, settings, {
        colNum: action.colNum,
        rowNum: state.rowNum,
        lineLength: state.lineLength,
        countdown: state.countdown,
        player1: state.player1,
        player2: state.player2
      })
    case SET_ROW_NUM:
      return Object.assign({}, settings, {
        colNum: state.colNum,
        rowNum: action.rowNum,
        lineLength: state.lineLength,
        countdown: state.countdown,
        player1: state.player1,
        player2: state.player2
      })
    case SET_LINE_LENGTH:
      return Object.assign({}, settings, {
        colNum: state.colNum,
        rowNum: state.rowNum,
        lineLength: action.lineLength,
        countdown: state.countdown,
        player1: state.player1,
        player2: state.player2
      })
    case SET_COUNTDOWN:
      return Object.assign({}, settings, {
        colNum: state.colNum,
        rowNum: state.rowNum,
        lineLength: state.lineLength,
        countdown: action.countdown,
        player1: state.player1,
        player2: state.player2
      })
    case SET_PLAYER_1:
      return Object.assign({}, settings, {
        colNum: state.colNum,
        rowNum: state.rowNum,
        lineLength: state.lineLength,
        countdown: state.countdown,
        player1: action.player1,
        player2: state.player2
      })
    case SET_PLAYER_2:
      return Object.assign({}, settings, {
        colNum: state.colNum,
        rowNum: state.rowNum,
        lineLength: state.lineLength,
        countdown: state.countdown,
        player1: state.player1,
        player2: action.player2
      })

    default:
      return state
  }
}

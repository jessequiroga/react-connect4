import * as types from '../constants/ActionTypes'

export const startGame = () => ({ type: types.START_GAME })
export const stopGame = () => ({ type: types.STOP_GAME })
export const setPlayer1 = (player1) => ({ type: types.SET_PLAYER_1, player1 })
export const setPlayer2 = (player2) => ({ type: types.SET_PLAYER_2, player2 })
export const setCurrentPlayer = (num) => ({ type: types.SET_CURRENT_PLAYER, num })
export const setColNum = (colNum) => ({ type: types.SET_COL_NUM, colNum })
export const setRowNum = (rowNum) => ({ type: types.SET_ROW_NUM, rowNum })
export const setLineLength = (lineLength) => ({ type: types.SET_LINE_LENGTH, lineLength })
export const setGameStatus = (status) => ({ type: types.SET_GAME_STATUS, status })
export const toggleIntroduction = () => ({ type: types.TOGGLE_INTRODUCTION })
export const initBoard = (board) => ({ type: types.INIT_BOARD, board })
export const insertToken = (board) => ({ type: types.INSERT_TOKEN, board })

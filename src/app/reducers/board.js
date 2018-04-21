import {
  INIT_BOARD,
  INSERT_TOKEN,
} from '../constants/ActionTypes'
import * as values from '../constants/DefaultValues'

const initialState = {
  cols: values.colNum,
  rows: values.rowNum,
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
      // Object.assign = function(target) {
      //   let board = []
      //   for (var i = 0; i < state.cols; i++) {
      //     board[i] = [];
      //     for (var j = 0; j < state.rows; j++) {
      //       board[i][j] = null;
      //     }
      //   }
      //   return {
      //     cols: action.cols,
      //     rows: action.rows,
      //     board: board,
      //     ready: true
      //   }
      // }
    case INSERT_TOKEN:
      return Object.assign({}, board, {
        board: action.board,
        ready: true
      })
      // return state.board.map((col, indexCol) => {
      //   console.log(col)
      //   // board.col === action.id ?
      //   // { ...todo, text: action.text } :
      //   // todo
      // })


    // console.log(state.board)
    // console.log(action.cols)
    // console.log(action.rows)
      // state.board[]
      // console.log(action.col)
      // console.log(action.row)
      // return Object.assign({}, state, {
      //   board: 2
      //   board: state.board.map((col, indexCol) => {
      //     if (indexCol === action.col) {
      //       col.map((row, indexRow) => {
      //         if(indexRow === action.row) {
      //           console.log(indexCol + ' ' + indexRow)
      //           return Object.assign({}, board, {
      //             board
      //           })
      //         }
      //       })
      //       console.log(board)
          // }
          // if (index === action.index) {
          //   return Object.assign({}, board, {
          //     completed: !todo.completed
          //   })
          // }
          // return todo
      //   })
      // })
      // Object.assign = function(target) {
      //   let board = []
      //   for (var i = 0; i < state.cols; i++) {
      //     board[i] = [];
      //     for (var j = 0; j < state.rows; j++) {
      //       console.log(action.col + ' ' + action.row + ' ' + action.player)
      //       board[i][j] = null;
      //     }
      //   }
      //   return {
      //     cols: state.cols,
      //     rows: state.rows,
      //     board: board,
      //     ready: true
      //   }
      // }

    default:
      return state
  }
}

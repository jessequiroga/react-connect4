import React from 'react'
import Token from '../Token/Token.jsx'
import BoardCell from '../Cells/BoardCell.jsx'
import InputCellContainer from '../Cells/InputCellContainer.js'
import './Board.scss'

export default class Board extends React.Component {
  render() {
    let board = this.props.board

    let rowInput = board[0].map((col, index) => {
      return (
        <div className="cellContainer" key={ index } id={ index }>
          { this.props.gameStatus === 'running' && !col &&
            <InputCellContainer col={ index } onInsertToken={ this.props.onInsertToken } />
          }
        </div>
      )
    })

    let rows = board.map((row, rowIndex) => {
      return (
        <div className="row"  key={ rowIndex } >
          { row.map((cellValue, colIndex) => {
             return (
              <div className="cellContainer" key={ colIndex } id={ `${ rowIndex }-${ colIndex }` } >
                <BoardCell col={ colIndex } row={ rowIndex } win={ cellValue < 0 } />
                { (cellValue != null) &&
                  <Token player={ cellValue } col={ colIndex } key={ `${ rowIndex }-${ colIndex }` } row={ rowIndex } />
                }
              </div>
            )
          })}
        </div>
      )
    })

    return (
      <div className="connect4__board">
        <div className="gameboard">
          <div className="row input">
            { rowInput }
          </div>
          <div className="playField">
            { rows }
          </div>
        </div>
        <br/>
      </div>
    )
  }
}

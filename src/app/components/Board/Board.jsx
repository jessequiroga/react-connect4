import React from 'react';
import Token from '../Token/Token.jsx';
import Connect4Cell from '../BoardCell/BoardCell.jsx';
import Connect4InputCell from '../BoardCell/InputCell.jsx';
import './Board.scss'

export default class Connect4Board extends React.Component {
  render() {
    console.log(this.props)
    let board = this.props.board;

    let rowInput = board[0].map((col, colIndex) => {
      return (

        <div className="cellContainer" key={colIndex} id={colIndex}>
          { this.props.gameStatus === 'running' && !col  &&
          <Connect4InputCell col={colIndex} currPlayer={ this.props.currPlayer } onInsertToken={ this.props.onInsertToken } />
          }
        </div>

      )
    });

    let rows = board.map((row, rowIndex) => {
      return (
        <div className="row"  key={rowIndex} >
          {row.map((cellValue, colIndex) => {
             return (
              <div className="cellContainer" key={colIndex} id={`${rowIndex}-${colIndex}`} >

                <Connect4Cell col={colIndex} row={rowIndex} win={cellValue < 0} />

                {(cellValue != null) &&
                  <Token player={cellValue} col={colIndex} key={`${rowIndex}-${colIndex}`}
                  row={rowIndex} />
                }

              </div>
            )

          })}
        </div>
      )
    });

    return (
      <div className="connect4__board">
        <div className="gameboard">
          <div className="row input">
            {rowInput}
          </div>
          <div className="playField">
            {rows}
          </div>
        </div>
        <br/>

      </div>
    );
  }
}

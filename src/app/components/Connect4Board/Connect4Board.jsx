import React from 'react';
import './Connect4Board.scss'


import Connect4Token from '../Connect4Token/Connect4Token.jsx';
import Connect4Cell from '../Connect4Cell/Connect4Cell.jsx';
import Connect4InputCell from '../Connect4Cell/Connect4InputCell.jsx';


export default class Connect4Board extends React.Component {
  constructor() {
    super();
    this.state = {
    }; 
  }

  render() {
    let board = this.props.board;


    let rowInput = board[0].map((col, colIndex) => {
      return (
        <div className="Connect4Board__cell" key={colIndex} id={colIndex}>
          <Connect4InputCell col={colIndex} onInsertToken={this.props.onInsertToken} />
        </div>
      )
    });

    let rows = board.map((row, rowIndex) => {
      return (
        <div className="row"  key={rowIndex} >
          {row.map((cellValue, colIndex) => {
             return (
              <div className="Connect4Board__cell" key={colIndex} id={`${rowIndex}-${colIndex}`} >
                <Connect4Cell col={colIndex} row={rowIndex} />
                
                {cellValue &&
                  <Connect4Token player={cellValue} col={colIndex} key={`${rowIndex}-${colIndex}`}
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
        <p>Hello {this.props.config.player1} and {this.props.config.player2}!</p>

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
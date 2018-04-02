import React from 'react';
import './Connect4Board.scss'

export default class Connect4Board extends React.Component {
  constructor() {
    super();
    this.state = {
    }; 
  }
  
  render() {
    return (
      <div className="connect4__board">
        <p>Hello {this.props.config.player1} and {this.props.config.player2}!</p>

        <div className="gameboard">
          <div className="row input">
            <div className="col" id="0"></div>
            <div className="col" id="1"></div>
            <div className="col" id="2"></div>
            <div className="col" id="3"></div>
            <div className="col" id="4"></div>
            <div className="col" id="5"></div>
            <div className="col" id="6"></div>
          </div>
          <div className="playField">
            <div className="row">
              <div className="col" id="row5col0"></div>
              <div className="col" id="row5col1"></div>
              <div className="col" id="row5col2"></div>
              <div className="col" id="row5col3"></div>
              <div className="col" id="row5col4"></div>
              <div className="col" id="row5col5"></div>
              <div className="col" id="row5col6"></div>
            </div>
            <div className="row">
              <div className="col" id="row4col0"></div>
              <div className="col" id="row4col1"></div>
              <div className="col" id="row4col2"></div>
              <div className="col" id="row4col3"></div>
              <div className="col" id="row4col4"></div>
              <div className="col" id="row4col5"></div>
              <div className="col" id="row4col6"></div>
            </div>
            <div className="row">
              <div className="col" id="row3col0"></div>
              <div className="col" id="row3col1"></div>
              <div className="col" id="row3col2"></div>
              <div className="col" id="row3col3"></div>
              <div className="col" id="row3col4"></div>
              <div className="col" id="row3col5"></div>
              <div className="col" id="row3col6"></div>
            </div>
            <div className="row">
              <div className="col" id="row2col0"></div>
              <div className="col" id="row2col1"></div>
              <div className="col" id="row2col2"></div>
              <div className="col" id="row2col3"></div>
              <div className="col" id="row2col4"></div>
              <div className="col" id="row2col5"></div>
              <div className="col" id="row2col6"></div>
            </div>
            <div className="row">
              <div className="col" id="row1col0"></div>
              <div className="col" id="row1col1"></div>
              <div className="col" id="row1col2"></div>
              <div className="col" id="row1col3"></div>
              <div className="col" id="row1col4"></div>
              <div className="col" id="row1col5"></div>
              <div className="col" id="row1col6"></div>
            </div>
            <div className="row">
              <div className="col" id="row0col0"></div>
              <div className="col" id="row0col1"></div>
              <div className="col" id="row0col2"></div>
              <div className="col" id="row0col3"></div>
              <div className="col" id="row0col4"></div>
              <div className="col" id="row0col5"></div>
              <div className="col" id="row0col6"></div>
            </div>
          </div>
        </div>

      </div>);
  }
}
import React from 'react';
import PropTypes from 'prop-types';

import './Connect4Setting.scss'

export default function Connect4Setting({onGameStart, onSave, config}) {

    return (
      <div className="setting">

        <h2>Please enter your names:</h2>
        <div className="flex">
            <div className="setting__labelPlayer player1"></div>
            <div className="setting__labelPlayer player2"> </div>
        </div><br/>
        <div className="flex">
         
          <input className="setting__input"
              placeholder="Player 1"
              name="player1"
              onChange={changeString}
              type="text"
              value={config.player1} />
          <input className="setting__input"
                placeholder="Player 2"
                name="player2"
                onChange={changeString}
                type="text"
                value={config.player2} />
        </div>
        <br/><br/>
        <hr/>

        <h2>Setting</h2>
        <div className="flex">
          <label className="setting__label">Cols:</label>
          <input className="setting__input"
              name="cols"
              onChange={changeNumber}
              type="number"
              value={config.cols}
          />
        </div>
        <div className="flex">
          <label className="setting__label">Row:</label>
          <input className="setting__input"
              name="rows"
              onChange={changeNumber}
              type="number"
              value={config.rows}
          />
        </div>
        <div className="flex">
          <label className="setting__label">Length:</label>
          <input className="setting__input"
              name="length"
              onChange={changeNumber}
              type="number"
              value={config.length}
          />
        </div>
        <br/><br/>
        <div className="flex buttonContainer">
          <button className="fancyButton start" onClick={handleClick} type="button">
          Start <i className="fa fa-play-circle fa-lg" aria-hidden="true"></i> </button>
        </div>
      </div>);


    function validateBoardSize(value) {
      if (value < 4) {
        return 4;
      } else if (value > 25) {
        return 25;
      }
      return Number(value);
    }

    function changeString(event) {
      const name = event.target.name;
      const value = event.target.value;
      onSave(name, value);
    }

    function changeNumber(event){
      const name = event.target.name;
      const value = validateBoardSize(event.target.value);
      onSave(name, value);
    }

    function handleClick(event) {
      event.preventDefault();
      onGameStart();
    }
}


Connect4Setting.propTypes = {
  config: PropTypes.shape({
    cols: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
    player1: PropTypes.string.isRequired,
    player2: PropTypes.string.isRequired
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onGameStart: PropTypes.func.isRequired
};

Connect4Setting.defaultProps = {};
import React from 'react';
import PropTypes from 'prop-types';

import './Connect4Setting.scss'

export default function Connect4Setting({onGameStart, onSave, config}) {

    return (
      <div className="connect4__setting">
        <div className="players">
          <div className="flex">
              <label className="label_player player1"></label>
              <label className="label_player player2"> </label>
          </div>
          <div className="flex">
            <input className="input"
                placeholder="Player 1"
                name="player1"
                onChange={changeString}
                type="text"
                value={config.player1} />
            <input className="input"
                  placeholder="Player 2"
                  name="player2"
                  onChange={changeString}
                  type="text"
                  value={config.player2} />
          </div>
        </div>

        
        <div className="gameboard">
          <h2>Gameboard Settings:</h2>
          <div className="flex">
            <label className="label">Cols:</label>
            <input className="input"
                name="cols"
                onChange={changeNumber}
                type="number"
                value={config.cols}
            />
          </div>
          <div className="flex">
            <label className="label">Row:</label>
            <input className="input"
                name="rows"
                onChange={changeNumber}
                type="number"
                value={config.rows}
            />
          </div>
          <div className="flex">
            <label className="label">Length:</label>
            <input className="input"
                name="length"
                onChange={changeNumber}
                type="number"
                value={config.length}
            />
          </div>
        </div>

        <div className="btn__container">
          <button className="btn__primary btn__large" onClick={handleClick} type="button">
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
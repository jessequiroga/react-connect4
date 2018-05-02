import React from 'react'
import PropTypes from 'prop-types'
import './Settings.scss'

export default function Settings({ onGameStart,
  player1, player2, colNum, rowNum, lineLength, countdown,
  setPlayer1, setPlayer2, setColNum, setRowNum, setLineLength, setCountdown })
{
  function validateNum(e){
    let value = e.target.value

    if(value < 4) return 4
    else if(value > 25) return 25
    else return value
  }
  function validateTime(e){
    let value = e.target.value

    if(value < 0) return 0.5
    else if(value > 10) return 10
    else return value
  }
  function validateString(value, num){
    if(!value) return `Player ${ num }`
    else return value
  }

  function _setPlayer1(e) { setPlayer1(e.target.value) }
  function _setPlayer2(e) { setPlayer2(e.target.value) }
  function _setColNum(e) { setColNum(validateNum(e)) }
  function _setRowNum(e) { setRowNum(validateNum(e)) }
  function _setLineLength(e) { setLineLength(validateNum(e)) }
  function _setCountdown(e) { setCountdown(validateTime(e)) }

  function handleClick(e) {
    setPlayer1(validateString(player1, 1))
    setPlayer2(validateString(player2, 2))
    e.preventDefault();
    onGameStart();
  }

  return (
    <div className="component__settings">
      <div className="players">
        <div className="flex">
            <label className="labelPlayer player1"></label>
            <label className="labelPlayer player2"> </label>
        </div>
        <div className="flex">
          <input className="input"
              placeholder="Player 1"
              name="player1"
              onChange={ _setPlayer1.bind(this) }
              type="text"
              value={ player1 } />
          <input className="input"
                placeholder="Player 2"
                name="player2"
                onChange={ _setPlayer2.bind(this) }
                type="text"
                value={ player2 } />
        </div>
      </div>

      <div className="gameboard">
        <h2>Gameboard Settings:</h2>
        <div className="flex">
          <label className="label">Cols:</label>
          <input className="input"
              name="cols"
              onChange={ _setColNum.bind(this) }
              type="number"
              value={ colNum }
          />
        </div>
        <div className="flex">
          <label className="label">Row:</label>
          <input className="input"
              name="rows"
              onChange={ _setRowNum.bind(this) }
              type="number"
              value={ rowNum }
          />
        </div>
        <div className="flex">
          <label className="label">Length:</label>
          <input className="input"
              name="lineLength"
              onChange={ _setLineLength.bind(this) }
              type="number"
              value={ lineLength }
          />
        </div>
        <div className="flex">
          <label className="label">Time (min):</label>
          <input className="input"
              name="countdown"
              onChange={ _setCountdown.bind(this) }
              type="number"
              step=".5"
              value={ countdown }
          />
        </div>
      </div>

      <div className="btn__container">
        <button className="btn__primary btn__large" onClick={ handleClick } type="button">
        Start <i className="fa fa-play-circle fa-lg" aria-hidden="true"></i> </button>
      </div>
    </div>
  )
}

Settings.propTypes = {
  onGameStart: PropTypes.func.isRequired
}

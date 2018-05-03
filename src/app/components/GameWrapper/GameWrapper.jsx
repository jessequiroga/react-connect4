import React from 'react'
import GameContainer from '../Game/GameContainer.js'
import SettingsContainer from '../Settings/SettingsContainer.js'
import './GameWrapper.scss'

export default class GameWrapper extends React.Component {
  render() {
    const { gameStarted, startGame, stopGame } = this.props
    return (
      <div className="component__gamewrapper">
        <h1>Connect Four</h1>
        { gameStarted ?
          <GameContainer onGameStart={ startGame } onGameStop={ stopGame } /> :
          <SettingsContainer onGameStart={ startGame } />
        }
        <div id="copyright">created by Christa & Christina</div>
      </div>
    )
  }
}

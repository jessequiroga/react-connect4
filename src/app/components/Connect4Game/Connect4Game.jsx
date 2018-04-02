import React from 'react';
import Connect4Introduction from '../Connect4Introduction/Connect4Introduction.jsx';
import './Connect4Game.scss'

export default class Connect4Game extends React.Component {
  constructor() {
    super();
    this.state = {
      showInstructions: false
    }; 
  }

  toggleInstructions() {
    this.setState({
      showInstructions: !this.state.showInstructions
    });
  }

  render() {
    return (
     <div className="game">
      <p>Hello {this.props.config.player1} and {this.props.config.player2}!</p>

        <div className="flex buttonContainer">
            <button className="settingBtn fancyButton" onClick={this.props.onGameStop}>Change Setting</button>

            <button className="infoBtn fancyButton" onClick={this.toggleInstructions.bind(this)}>
              <i className="fa fa-info" aria-hidden="true"></i>
            </button>

            <button className="resetBtn fancyButton"><span id="restart">Restart</span></button>
        </div>
        
        {this.state.showInstructions ? 
            <Connect4Introduction closePopup={this.toggleInstructions.bind(this)} /> : null
        }
      
      </div>);
  }
}
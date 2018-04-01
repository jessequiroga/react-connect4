import React from 'react';
import Connect4Introduction from '../Connect4Introduction/Connect4Introduction.jsx';
import './Connect4App.scss'

export default class Connect4App extends React.Component {
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
     <div className="connect4__app">

        <p className="player">current Player <span className="curPlayer">1</span></p><br/>
        <div className="flex">

            <button className="playerName fancyButton">Change Playername </button>

            <button className="info fancyButton"
              onClick={this.toggleInstructions.bind(this)}>
              <i className="fa fa-info" aria-hidden="true"></i>
            </button>
            {this.state.showInstructions ? 
              <Connect4Introduction closePopup={this.toggleInstructions.bind(this)} />
              : null
            }

            <button className="reset fancyButton"><span id="restart">Restart</span></button>
        </div>
        
      
      </div>);
  }
}
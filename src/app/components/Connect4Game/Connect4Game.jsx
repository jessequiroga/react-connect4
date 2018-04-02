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
     <div className="connect4__game">
      <p>Hello {this.props.config.player1} and {this.props.config.player2}!</p>

        <div className="btn__container">
            <button className="btn__primary btn__small" onClick={this.props.onGameStop}><i className="fa fa-cogs fa-lg" aria-hidden="true"></i></button>

            <button className="btn__primary btn__medium">Restart <i className="fa fa-refresh" aria-hidden="true"></i>
             </button>

            <button className="btn__primary btn__small" onClick={this.toggleInstructions.bind(this)}>
              <i className="fa fa-info-circle fa-lg" aria-hidden="true"></i>
            </button>

            
        </div>
        
        {this.state.showInstructions ? 
            <Connect4Introduction closePopup={this.toggleInstructions.bind(this)} /> : null
        }
      
      </div>);
  }
}
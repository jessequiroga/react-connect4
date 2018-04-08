import React from 'react';
import './Connect4Message.scss'

export default class Connect4Message extends React.Component {

	render() {
    return (
      <p className="player">
      		current Player 
      		<span className="currPlayer">  {this.props.currPlayer}</span>
          <br/>

      </p>

          
  	)
	}
}

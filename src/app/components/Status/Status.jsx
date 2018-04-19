import React from 'react';
import './Status.scss'

export default class Status extends React.Component {

	render() {
    return (
      <p className="player">
      		{this.props.message}
      		<span className="currPlayer">  {this.props.currPlayer}</span>
          <br/>
      </p>
          
  	)
	}
}

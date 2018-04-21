import React from 'react'
import './Status.scss'

export default class Status extends React.Component {
	getPlayerName() {
		return (this.props.currPlayer == 1) ? this.props.player1 : this.props.player2
  }

	render() {
		let message = 'Current Player: '
		let player = this.getPlayerName()

		if (this.props.status == 'full') {
			message = 'Field is full! '
			player = 'No winner'
		}
		else if (this.props.status == 'running') {
			message = 'Current player: '
		}
		else if (this.props.status == 'gameover') {
			message = 'The winner is: '
		}

    return (
      <p className="player">
      		{ message }
					<span className="currPlayer">{ player }</span><br/>
      </p>
  	)
	}
}

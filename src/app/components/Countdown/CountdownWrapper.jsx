import React from 'react'
import Countdown from 'react-countdown-now'

export default class CountdownWrapper extends React.Component {
  componentDidUpdate() {

  }

  countdownRenderer({ hours, minutes, seconds, completed }) {
    console.log(seconds)
    if (completed) {
      return <Completionist />
    }
    else {
      return <span>{ minutes }:{ seconds }</span>
    }
  }

  render() {
    console.log(this.props)
    return (
      <Countdown
        date = { Date.now() + this.props.countdown * 1000 * 6 }
        renderer = { this.countdownRenderer }
      />
    )
  }
}

const Completionist = () => <span><b>Time's up! Please restart the game</b></span>

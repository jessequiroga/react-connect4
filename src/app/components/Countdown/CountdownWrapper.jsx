import React from 'react'
import Countdown from 'react-countdown-now'
import ReactCountdownClock from 'react-countdown-clock'

export default class CountdownWrapper extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidUpdate() {
    console.log(this.props)

  }

  updateCountdown(minutes) {
    console.log(minutes)
  }

  countdownRenderer({ hours, minutes, seconds, completed }) {
    if (completed) {
      return <Completionist />
    }
    else {
      return <span>{ minutes }:{ seconds }</span>
    }
  }

  myCallback() {
    console.log('sdf')
  }

  render() {
    return (
      // <Countdown
      //   date = { Date.now() + this.props.countdown * 1000 }
      //   renderer = { this.countdownRenderer }
      //   onBlur = { this.updateCountdown(10) }
      // />
      <ReactCountdownClock seconds={60}
                     color="#000"
                     alpha={0.9}
                     size={300}
                     onComplete={this.myCallback} />
    )
  }
}

const Completionist = () => <span><b>Time's up! Please restart the game</b></span>

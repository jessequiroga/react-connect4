import React from 'react';
import './Connect4Token.scss';

export default class Connect4Token extends React.Component {

  constructor(props) {
    super(props);
    this.state = {top: '0px'};
  }

  componentDidMount() {
    setTimeout(() =>
      this.setState({
      top: `${this.props.row * 50 + 2 }px`
    }),10);
  }

  render() {
    const css = {
      left: `${this.props.col * 50 + 3.5 }px`,
      top: this.state.top
    };
    const player = this.props.player < 0 ? -this.props.player :  this.props.player
    return (
      <div className={`token player${player}`} style={css} ></div>
    );
  }
}
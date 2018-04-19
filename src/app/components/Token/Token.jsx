import React from 'react';
import './Token.scss';

export default class Token extends React.Component {

  constructor(props) {
    super(props);
    this.state = {top: '0px'};
  }

  componentDidMount() {
    setTimeout(() =>
      this.setState({
      top: `${this.props.row * 50 + 5.5 }px`
    }),10);
  }

  render() {
    const css = {
      left: `${this.props.col * 50 + 6.5 }px`,
      top: this.state.top
    };
    let playerClass = this.props.player < 0 ? -this.props.player :  this.props.player
    return (
      <div className={`token player${playerClass}`} style={css} ></div>
    );
  }
}
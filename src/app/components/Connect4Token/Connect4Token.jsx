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
    return (
      <div className={`token player${this.props.player}`} style={css} ></div>
    );
  }
}
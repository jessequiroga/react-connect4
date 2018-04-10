import React from 'react';


export default class Connect4Cell extends React.Component {
 
  render() {
    return (
      <div className="col" id={`row${this.props.row}col${this.props.col}`}></div>
    );
  }

}
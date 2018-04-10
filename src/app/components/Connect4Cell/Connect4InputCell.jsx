import React from 'react';

export default class Connect4InputCell extends React.Component {

  onClick(){ 
  	this.props.onInsertToken(this.props.col);
  }

  render() {
    return (
    	<div className="col" id={this.props.col} onClick={this.onClick.bind(this)}></div>
    );
  }

}
import React from 'react'

export default class InputCell extends React.Component {
	constructor() {
    super()
    this.state = { isHovered: false }
  }

	toggleHover(){
    this.setState({ isHovered: !this.state.isHovered })
	}

  onClick(){
  	this.props.onInsertToken(this.props.col)
  }

  render() {
  	const hoverClass = this.state.isHovered ? `player${ this.props.currPlayer }` : ''
    return (
    	<div className={ `col ${ hoverClass }` } id={ this.props.col } onClick={ this.onClick.bind(this) }
    		onMouseEnter={ this.toggleHover.bind(this) } onMouseLeave={ this.toggleHover.bind(this) }>
			</div>
    )
  }
}

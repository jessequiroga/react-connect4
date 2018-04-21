import React from 'react'

export default class BoardCell extends React.Component {
  render() {
  	var tokenWinClass = ''
  	if (this.props.win) tokenWinClass = 'markToken'
    return (
      <div className={ `col ${ tokenWinClass }` } id={ `row${ this.props.row }col${ this.props.col }` }></div>
    )
  }
}

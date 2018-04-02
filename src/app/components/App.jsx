import React from 'react';
import Connect4 from './Connect4Container/Connect4Container.jsx'

export default class App extends React.Component {
  render() {
  	console.log("API_KEY: " + API_KEY);
    return (
    	<div className="connect4__app">

    	 <Connect4/>
    	</div>
     );
  }
}
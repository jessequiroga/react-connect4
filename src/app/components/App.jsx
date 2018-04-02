import React from 'react';
import Connect4 from './Connect4App/Connect4App.jsx'

export default class App extends React.Component {
  render() {
  console.log("API_KEY: " + API_KEY);
    return (
     <div id="container">
        <h1>Connect Four</h1>

        <Connect4/>
     </div>);
  }
}
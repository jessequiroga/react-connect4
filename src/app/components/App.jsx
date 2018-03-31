import React from 'react';

class App extends React.Component {
  render() {
  console.log("API_KEY: " + API_KEY);
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Welcome to Connect Four</h1>
      </div>);
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // name = () => "Mary Jane"

  render() {
    const name = "Mary Jane"
    const loading = false
    const showName = true

    return (
      <div className="App">
        <h1>My App</h1>
        {loading ? <h2>Loading...</h2> : <h2>Hello {showName && name}</h2>}
      </div>
    );
  }

}

export default App;

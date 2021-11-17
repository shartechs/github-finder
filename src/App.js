import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';
import './App.css';

class App extends Component {

  render() {

    return (
      <>
      <nav className="navbar bg-primary">
        <Navbar />
      </nav>
      <div className="container">
              <Users />
      </div>
      </>
    );
  }

}

export default App;

import React, { Component } from 'react';

import './App.scss';

import HomePage from './Pages/HomePage';



class App extends Component {

  constructor() {
    super();

    this.state = {
      modalOpen: true,
      usernameInput: ''
    }
  }

  render(){
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
  
}

export default App;

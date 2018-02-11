import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PayPalCheckout from './PaypalButton.js';
import {BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Cart from './Cart';
import FetchPaypal from './FetchPaypal';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>  
          <FetchPaypal />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-table/react-table.css'

import ShoppingCart from './ShoppingCart';
import AddItemForm from './AddItemForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Shopping List
          </h1>
        </header>
        <ShoppingCart />
        <AddItemForm />
      </div>
    );
  }
}

export default App;

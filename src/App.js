import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import hotswapApp from './reducers'

let store = createStore(hotswapApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Hotswap</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;

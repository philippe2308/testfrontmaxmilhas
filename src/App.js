import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import SearchFlights from './views/SearchFlights';
import { Reducers } from './config/reducers';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    let createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    this.Store = createStoreWithMiddleware(Reducers);
  }
  render() {
    return (
    <Provider store={this.Store}>
      <SearchFlights />
    </Provider>
    );
  }
}

export default App;

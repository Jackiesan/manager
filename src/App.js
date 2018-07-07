import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router'

class App extends Component {
  componentDidMount() {
    const config = {
    apiKey: 'AIzaSyBhiUY_npdrzFD27ONwncfRhD59sQUuJKA',
    authDomain: 'manager-37268.firebaseapp.com',
    databaseURL: 'https://manager-37268.firebaseio.com',
    projectId: 'manager-37268',
    storageBucket: '',
    messagingSenderId: '595252903423'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;

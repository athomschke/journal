// ./node_modules/react-native/packager/packager.sh start --resetCache

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { setInitialState } from './actions/initial';
import Journal from './containers/Journal';
import journal from './reducers/journal';

export default class Application extends Component {

  render() {

    let store = createStore(journal);

    AsyncStorage.getItem('Journal', (state) => {
      store.dispatch(setInitialState(state || []));
    });

    return (
      <Provider store={store}>
        <Journal></Journal>
      </Provider>
    );
  }
}

// ./node_modules/react-native/packager/packager.sh start --resetCache

import React, { Component } from 'react';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { setInitialState } from './actions/initial';
import Journal from './containers/Journal';

export default class Application extends Component {

  render() {

    let store = configureStore();

    // AsyncStorage.getItem('Journal', (state) => {
    //   store.dispatch(setInitialState(state || []));
    // });

    return (
      <Provider store={store}>
        <Journal></Journal>
      </Provider>
    );
  }
}

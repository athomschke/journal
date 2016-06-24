// ./node_modules/react-native/packager/packager.sh start --resetCache

import React, { Component } from 'react';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import Journal from './containers/Journal';
import loadData from './loadData';

export default class Application extends Component {

  render() {

    let store = configureStore();

    loadData(store);

    return (
      <Provider store={store}>
        <Journal></Journal>
      </Provider>
    );
  }
}

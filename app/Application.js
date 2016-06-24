// ./node_modules/react-native/packager/packager.sh start --resetCache

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';
import Journal from './containers/Journal';
import journal from './reducers/journal';
import loadData from './loadData';

export default class Application extends Component {

  render() {

    let store = createStore(journal);

    loadData(store);

    return (
      <Provider store={store}>
        <Journal></Journal>
      </Provider>
    );
  }
}

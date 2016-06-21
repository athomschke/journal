import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {View} from 'react-native';
import Journal from './containers/Journal';
import journal from './reducers/journal'

export default class Application extends Component {

  render() {
    let initialState = [{
      affirmation: ['I am a strong black man'],
      amazingThings: ['only one good thing today'],
      grateful: ['sun', 'food', 'yoga'],
      improve: undefined,
      makesGreat: ['seeing Lisa again']
    }, {
      affirmation: ['I am a strong black man'],
      amazingThings: ['only one good thing today'],
      grateful: ['sun', 'food', 'yoga'],
      improve: undefined,
      makesGreat: ['seeing Lisa again']
    }]

    let store = createStore(journal, initialState);

    return (
      <Provider store={store}>
        <Journal></Journal>
      </Provider>
    );
  }
}

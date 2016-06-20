import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {View} from 'react-native';
import JournalEntry from './components/JournalEntry';
import day from './reducers/day'

export default class Journal extends Component {

  render() {
    let initialState = [{
      affirmation: ['I am a strong black man'],
      amazingThings: ['only one good thing today'],
      grateful: ['sun', 'food', 'yoga'],
      improve: undefined,
      makesGreat: ['seeing Lisa again']
    }]

    let store = createStore(journal, initialState);

    return (
      <Provider store={store}>
        <JournalEntry></JournalEntry>
      </Provider>
    );
  }
}

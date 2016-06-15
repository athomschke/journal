import React, { Component } from 'react';
import {View} from 'react-native';
import JournalEntry from './components/JournalEntry';

export default class Journal extends Component {

  render() {
    return (
      <View>
        <JournalEntry></JournalEntry>
      </View>
    );
  }
}

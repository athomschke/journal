import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import JournalEntry from './components/JournalEntry';

export default class Journal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <JournalEntry></JournalEntry>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

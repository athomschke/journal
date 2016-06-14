import React, { Component } from 'react';
import {StyleSheet, AppRegistry, Text, View} from 'react-native';
import JournalEntry from './app/components/JournalEntry';

class Journal extends Component {
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

AppRegistry.registerComponent('Journal', () => Journal);

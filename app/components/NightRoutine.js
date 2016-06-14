import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import JournalTextInput from './JournalTextInput';

export default class NightRoutine extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Night Routine
        </Text>
        <Text style={styles.section}>
          Three amazing things that happened today:
        </Text>
        <Text>1.</Text><JournalTextInput></JournalTextInput>
        <Text>2.</Text><JournalTextInput></JournalTextInput>
        <Text>3.</Text><JournalTextInput></JournalTextInput>
        <Text style={styles.section}>
          How could I have made today better?
        </Text>
        <JournalTextInput></JournalTextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353E66'
  },
  section: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    color: '#93C1D1'
  },
  headline: {
    fontSize: 40,
    textAlign: 'left',
    margin: 10,
    color: '#93C1D1'
  }
});

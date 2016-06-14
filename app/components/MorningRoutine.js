import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import JournalTextInput from './JournalTextInput';

export default class MorningRoutine extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.headline}>
            Morning Routine
          </Text>
          <Text style={styles.section}>
            I am grateful for…
          </Text>
          <Text style={styles.numbering}>1.</Text><JournalTextInput></JournalTextInput>
          <Text style={styles.numbering}>2.</Text><JournalTextInput></JournalTextInput>
          <Text style={styles.numbering}>3.</Text><JournalTextInput></JournalTextInput>
          <Text style={styles.section}>
            What would make today great?
          </Text>
          <JournalTextInput></JournalTextInput>
          <Text style={styles.section}>
            Daily affirmation:
          </Text>
          <JournalTextInput></JournalTextInput>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F1DD'
  },
  section: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    color: '#48321E'
  },
  headline: {
    flex: 1,
    fontSize: 40,
    textAlign: 'left',
    margin: 10,
    color: '#48321E'
  },
  numbering: {
      margin: 10
  }
});

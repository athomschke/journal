import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import JournalTextInput from './JournalTextInput';

export default class MorningRoutine extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={[styles.text, styles.headline]}>
            Morning Routine
          </Text>
          <Text style={[styles.text, styles.section]}>
            I am grateful for…
          </Text>
          <JournalTextInput description='1'></JournalTextInput>
          <JournalTextInput description='2'></JournalTextInput>
          <JournalTextInput description='3'></JournalTextInput>
          <Text style={[styles.text, styles.section]}>
            What would make today great?
          </Text>
          <JournalTextInput></JournalTextInput>
          <Text style={[styles.text, styles.section]}>
            Daily affirmation:
          </Text>
          <JournalTextInput></JournalTextInput>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F1DD'
  },
  text: {
    margin: 10,
    color: '#48321E'
  },
  section: {
    fontSize: 20
  },
  headline: {
    fontSize: 40
  }
});

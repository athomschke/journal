import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RoutineAnswer from './RoutineAnswer';

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
          <RoutineAnswer
            count={3}
            numbered={true}
          ></RoutineAnswer>
          <Text style={[styles.text, styles.section]}>
            What would make today great?
          </Text>
          <RoutineAnswer></RoutineAnswer>
          <Text style={[styles.text, styles.section]}>
            Daily affirmation:
          </Text>
          <RoutineAnswer></RoutineAnswer>
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

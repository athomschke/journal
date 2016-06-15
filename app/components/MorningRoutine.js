import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RoutineAnswer from './RoutineAnswer';
import RoutineSection from './RoutineSection';

export default class MorningRoutine extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.headline}>
            Morning Routine
          </Text>
          <RoutineSection
            title='I am grateful for…'
            count={3}
            numbered={true}
          ></RoutineSection>
          <RoutineSection
            title='What would make today great?'
          ></RoutineSection>
          <RoutineSection
            title='Daily affirmation:'
          ></RoutineSection>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F1DD'
  },
  headline: {
    margin: 10,
    color: '#48321E',
    fontSize: 40
  }
});

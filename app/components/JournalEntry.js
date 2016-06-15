import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import MorningRoutine from './MorningRoutine';
import NightRoutine from './NightRoutine';

export default class JournalEntry extends Component {

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <MorningRoutine></MorningRoutine>
        <NightRoutine></NightRoutine>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

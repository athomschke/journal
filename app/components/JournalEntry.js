import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import MorningRoutine from './MorningRoutine';
import NightRoutine from './NightRoutine';

export default class JournalEntry extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}
        >
          <MorningRoutine></MorningRoutine>
          <NightRoutine></NightRoutine>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height: 600
  }
});

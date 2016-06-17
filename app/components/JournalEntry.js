import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import AffirmationContainer from '../containers/Affirmation';
import AmazingThings from '../containers/AmazingThings';
import Grateful from '../containers/Grateful';
import Improve from '../containers/Improve';
import MakesGreat from '../containers/MakesGreat';
import { morning, night } from '../constants/titles';
import {contentFontSize, margin, nightLight, dayLight, dayDark, nightDark, headlineFontSize} from '../constants/style';

export default class JournalEntry extends Component {

  render() {
    let renderedRoutines = [];
    return (
      <ScrollView style={styles.scrollView}>
        <View style={[styles.container, styles.containerDay]}>
          <Text style={[styles.headline, styles.headlineDay]}>
            {morning}
          </Text>
          <View>
            <Grateful></Grateful>
            <MakesGreat></MakesGreat>
            <AffirmationContainer></AffirmationContainer>
          </View>
        </View>
        <View style={[styles.container, styles.containerNight]}>
          <Text style={[styles.headline, styles.headlineNight]}>
            {night}
          </Text>
          <View>
            <AmazingThings></AmazingThings>
            <Improve></Improve>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  headline: {
    textAlign: 'center',
    padding: margin,
    fontSize: headlineFontSize
  },
  headlineDay: {
    color: dayDark
  },
  headlineNight: {
    color: nightLight
  },
  container: {
    padding: margin
  },
  containerDay: {
    backgroundColor: dayLight
  },
  containerNight: {
    backgroundColor: nightDark
  }
});

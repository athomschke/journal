import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import Affirmation from './Questions/Affirmation';
import AmazingThings from './Questions/AmazingThings';
import Grateful from './Questions/Grateful';
import Improve from './Questions/Improve';
import MakesGreat from './Questions/MakesGreat';
import { morning, night } from '../constants/titles';
import {contentFontSize, margin, nightLight, dayLight, dayDark, nightDark, headlineFontSize} from '../constants/style';

export default class JournalEntry extends Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.object
  }

  static defaultProps = {
    value: {}
  }

  render() {
    let renderedRoutines = [];
    let that = this;
    return (
      <ScrollView style={styles.scrollView}>
        <View style={[styles.container, styles.containerDay]}>
          <Text style={[styles.headline, styles.headlineDay]}>
            {morning}
          </Text>
          <View>
            <Grateful
              {...this.props}
              value={this.props.value.grateful}
              onChangeText={that.props.onChangeGrateful}>
            </Grateful>
            <MakesGreat
              {...this.props}
              value={this.props.value.makesGreat}
              onChangeText={that.props.onChangeMakesGreat}>
            ></MakesGreat>
            <Affirmation
              {...this.props}
              value={this.props.value.affirmation}
              onChangeText={that.props.onChangeAffirmation}>
              ></Affirmation>
          </View>
        </View>
        <View style={[styles.container, styles.containerNight]}>
          <Text style={[styles.headline, styles.headlineNight]}>
            {night}
          </Text>
          <View>
            <AmazingThings
              {...this.props}
              value={this.props.value.amazingThings}
              onChangeText={that.props.onChangeAmazingThings}>
            ></AmazingThings>
            <Improve
              {...this.props}
              value={this.props.value.improve}
              onChangeText={that.props.onChangeImprove}>
            ></Improve>
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

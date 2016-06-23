import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import AnswerBlock from './AnswerBlock';
import { morningTitle, nightTitle, affirmationTitle, amazingThingsTitle, gratefulTitle, improveTitle, makesGreatTitle } from '../constants/titles';
import { affirmation, amazingThings, grateful, improve, makesGreat } from '../constants/names';
import {contentFontSize, margin, nightLight, dayLight, dayDark, nightDark, headlineFontSize} from '../constants/style';

export default class JournalEntry extends Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.object
  }

  static defaultProps = {
    value: {}
  }

  renderAnswerBlock(textColor, title, isList, name) {
    let value = this.props.value[name];
    return (<AnswerBlock {...this.props}
      textColor={textColor}
      title={title}
      isList={isList}
      value={value}
      onChangeText={(anArray) => {
        this.props.onChangeRoutineSection(anArray, name);
      }}>
    ></AnswerBlock>)
  }

  renderGrateful() {
    return this.renderAnswerBlock(dayDark, gratefulTitle, true, grateful);
  }

  renderMakesGreat() {
    return this.renderAnswerBlock(dayDark, makesGreatTitle, false, makesGreat);
  }

  renderAffirmation() {
    return this.renderAnswerBlock(dayDark, affirmationTitle, false, affirmation);
  }

  renderAmazingThings() {
    return this.renderAnswerBlock(nightLight, amazingThingsTitle, true, amazingThings);
  }

  renderImprove() {
    return this.renderAnswerBlock(nightLight, improveTitle, false, improve);
  }

  render() {
    let renderedRoutines = [];
    return (
      <ScrollView style={styles.scrollView}>
        <View style={[styles.container, styles.containerDay]}>
          <Text style={[styles.headline, styles.headlineDay]}>
            {morningTitle}
          </Text>
          <View>
            {this.renderGrateful()}
            {this.renderMakesGreat()}
            {this.renderAffirmation()}
          </View>
        </View>
        <View style={[styles.container, styles.containerNight]}>
          <Text style={[styles.headline, styles.headlineNight]}>
            {nightTitle}
          </Text>
          <View>
            {this.renderAmazingThings()}
            {this.renderImprove()}
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

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import AnswerBlock from './AnswerBlock';
import { morning, night, affirmation, amazingThings, grateful, improve, makesGreat } from '../constants/titles';
import {contentFontSize, margin, nightLight, dayLight, dayDark, nightDark, headlineFontSize} from '../constants/style';

export default class JournalEntry extends Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.object
  }

  static defaultProps = {
    value: {}
  }

  renderAnswerBlock(textColor, title, isList, value, onChangeText) {
    return (<AnswerBlock {...this.props}
      textColor={textColor}
      title={title}
      isList={isList}
      value={value}
      onChangeText={onChangeText}>
    ></AnswerBlock>)
  }

  renderGrateful() {
    return this.renderAnswerBlock(dayDark,grateful, true,
      this.props.value.grateful, this.props.onChangeGrateful)
  }

  renderMakesGreat() {
    return this.renderAnswerBlock(dayDark,makesGreat, false,
      this.props.value.makesGreat, this.props.onChangeMakesGreat)
  }

  renderAffirmation() {
    return this.renderAnswerBlock(dayDark,affirmation, false,
      this.props.value.affirmation, this.props.onChangeAffirmation)
  }

  renderAmazingThings() {
    return this.renderAnswerBlock(nightLight,amazingThings, true,
      this.props.value.amazingThings, this.props.onChangeAmazingThings)
  }

  renderImprove() {
    return this.renderAnswerBlock(nightLight,improve, false,
      this.props.value.improve, this.props.onChangeImprove)
  }

  render() {
    let renderedRoutines = [];
    return (
      <ScrollView style={styles.scrollView}>
        <View style={[styles.container, styles.containerDay]}>
          <Text style={[styles.headline, styles.headlineDay]}>
            {morning}
          </Text>
          <View>
            {this.renderGrateful()}
            {this.renderMakesGreat()}
            {this.renderAffirmation()}
          </View>
        </View>
        <View style={[styles.container, styles.containerNight]}>
          <Text style={[styles.headline, styles.headlineNight]}>
            {night}
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

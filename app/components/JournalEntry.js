import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import AnswerBlock from './AnswerBlock';
import { config } from '../constants/journalConfiguration';
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

  render() {
    let renderedRoutines = [];
    return (
      <ScrollView style={styles.scrollView}>
        <View style={[styles.container, {
          backgroundColor: config.routines[0].colorScheme.background
        }]}>
          <Text style={[styles.headline, {
            color: config.routines[0].colorScheme.text
          }]}>
            {config.routines[1].title}
          </Text>
          <View>
            {this.renderAnswerBlock(config.routines[0].colorScheme.text, config.routines[0].sections[0].title, config.routines[0].sections[0].isList, config.routines[0].sections[0].name)}
            {this.renderAnswerBlock(config.routines[0].colorScheme.text, config.routines[0].sections[1].title, config.routines[0].sections[1].isList, config.routines[0].sections[1].name)}
            {this.renderAnswerBlock(config.routines[0].colorScheme.text, config.routines[0].sections[2].title, config.routines[0].sections[2].isList, config.routines[0].sections[2].name)}
          </View>
        </View>
        <View style={[styles.container, {
            backgroundColor: config.routines[1].colorScheme.background
        }]}>
          <Text style={[styles.headline, {
            color: config.routines[1].colorScheme.text
          }]}>
            {config.routines[1].title}
          </Text>
          <View>
            {this.renderAnswerBlock(config.routines[1].colorScheme.text, config.routines[1].sections[0].title, config.routines[1].sections[0].isList, config.routines[1].sections[0].name)}
            {this.renderAnswerBlock(config.routines[1].colorScheme.text, config.routines[1].sections[1].title, config.routines[1].sections[1].isList, config.routines[1].sections[1].name)}
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
  container: {
    padding: margin
  }
});

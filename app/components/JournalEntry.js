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

  renderAnswerBlock(textColor, title, isList, name, i) {
    let value = this.props.value[name];
    return (<AnswerBlock {...this.props}
      key={i}
      textColor={textColor}
      title={title}
      isList={isList}
      value={value}
      onChangeText={(anArray) => {
        this.props.onChangeRoutineSection(anArray, name);
      }}>
    ></AnswerBlock>)
  }

  renderSections(routine) {
    return routine.sections.map((section, i) => {
        return this.renderAnswerBlock(routine.colorScheme.text, section.title, section.isList, section.name, i)
    })
  }

  renderRoutines(routines) {
    return routines.map((routine, i) => {
      return (<View style={[styles.container, {
        backgroundColor: routine.colorScheme.background
      }]}
        key={i}>
        <Text style={[styles.headline, {
          color: routine.colorScheme.text
        }]}>
          {routine.title}
        </Text>
        <View>
          {this.renderSections(routine)}
        </View>
      </View>)
    })
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        {this.renderRoutines(config.routines)}
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

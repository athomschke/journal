import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RoutineSection from './RoutineSection';
import {dayDark, headlineFontSize, margin} from '../constants/style';

export default class Routine extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.array
  };

  static defaultProps = {
    content: []
  }

  renderSections() {
    let sections = [];
    this.props.content.forEach((sectionProperties, index) => {
      sections.push(
        <RoutineSection {...sectionProperties}
          key={''+index}
        ></RoutineSection>
      )
    })
    return <View>{sections}</View>;
  }

  renderTitle() {
    return (
      <Text style={styles.headline}>
        {this.props.title}
      </Text>
    )
  }

  render() {
    return (
      <View>
        {this.renderTitle()}
        {this.renderSections()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headline: {
    margin: margin,
    color: dayDark,
    fontSize: headlineFontSize
  }
});

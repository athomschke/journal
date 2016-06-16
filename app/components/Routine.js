import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RoutineSection from './RoutineSection';
import {headlineFontSize, margin} from '../constants/style';

export default class Routine extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.array,
    styles: PropTypes.object
  };

  static defaultProps = {
    content: [],
    styles: {
      text: {
        color: '#000000'
      },
      container: {
        backgroundColor: '#FFFFFF'
      }
    }
  }

  renderSections() {
    let sections = [];
    this.props.content.forEach((sectionProperties, index) => {
      sections.push(
        <RoutineSection {...this.props} {...sectionProperties}
          key={''+index}
        ></RoutineSection>
      )
    })
    return <View>{sections}</View>;
  }

  renderTitle() {
    return (
      <Text style={[styles.headline, this.props.styles.text]}>
        {this.props.title}
      </Text>
    )
  }

  render() {
    return (
      <View style={[styles.container, this.props.styles.container]}>
        {this.renderTitle()}
        {this.renderSections()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headline: {
    textAlign: 'center',
    padding: margin,
    fontSize: headlineFontSize
  },
  container: {
    padding: margin
  }
});

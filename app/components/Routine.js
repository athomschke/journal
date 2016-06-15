import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RoutineSection from './RoutineSection';
import {dayDark, headlineFontSize, margin} from '../constants/style';

export default class Routine extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.array,
    colors: PropTypes.object
  };

  static defaultProps = {
    content: [],
    colors: {
      dark: '#000000'
    }
  }

  renderSections() {
    let sections = [];
    this.props.content.forEach((sectionProperties, index) => {
      sections.push(
        <RoutineSection {...sectionProperties}
          colors={this.props.colors}
          key={''+index}
        ></RoutineSection>
      )
    })
    return <View>{sections}</View>;
  }

  renderTitle() {
    return (
      <Text style={[styles.headline, {
        color: this.props.colors.dark
      }]}>
        {this.props.title}
      </Text>
    )
  }

  render() {
    let containerStyle = {
      backgroundColor: this.props.colors.light
    }
    return (
      <View style={containerStyle}>
        {this.renderTitle()}
        {this.renderSections()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headline: {
    margin: margin,
    fontSize: headlineFontSize
  }
});

import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Topic from './Topic';
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

  renderTopics() {
    let topics = [];
    this.props.content.forEach((topicProperties, index) => {
      topics.push(
        <Topic {...this.props} {...topicProperties}
          key={''+index}
        ></Topic>
      )
    })
    return <View>{topics}</View>;
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
        {this.renderTopics()}
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

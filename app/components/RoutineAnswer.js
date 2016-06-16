import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import JournalTextInput from './JournalTextInput';
import { margin } from '../constants/style';

export default class RoutineAnswer extends Component {

  static propTypes = {
    count: PropTypes.number,
    numbered: PropTypes.bool,
    colors: PropTypes.object
  };

  static defaultProps = {
    count: 1,
    numbered: false,
    styles: {
      text: {
        color: '#000000'
      }
    }
  }

  renderDescription(key) {
    let description = this.props.numbered ? '' + key + '.' : '';
    if (description) {
      return (
        <Text style={[styles.description, this.props.styles.text]}>
          {description}
        </Text>
      );
    }
  }

  renderAnswer() {
    return <JournalTextInput {...this.props} ></JournalTextInput>
  }

  render() {
    let answers = [];
    for(let i = 1; i<=this.props.count; i++) {
      answers.push(<View style={styles.container} key={i}>
        {this.renderDescription(i)}
        {this.renderAnswer()}
      </View>)
    }
    return (<View>{answers}</View>)
  }
}

const styles = StyleSheet.create({
  description: {
    width: 15,
    marginRight: margin
  },
  container: {
    flexDirection: 'row',
    margin: margin,
    marginTop: 20
  }
});

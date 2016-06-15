import React, { Component, PropTypes } from 'react';
import JournalTextInput from './JournalTextInput';
import { StyleSheet, View, Text } from 'react-native';
import RoutineAnswer from './RoutineAnswer';
import {dayDark, contentFontSize, margin} from '../constants/style';

export default class RoutineSection extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.title}
        </Text>
        <RoutineAnswer {...this.props}></RoutineAnswer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    margin: margin,
    color: dayDark,
    fontSize: contentFontSize
  }
});

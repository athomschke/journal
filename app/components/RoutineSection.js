import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RoutineAnswer from './RoutineAnswer';
import {contentFontSize, margin} from '../constants/style';

export default class RoutineSection extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    colors: PropTypes.object
  };

  static defaultProps = {
    colors: {
      text: '#000000'
    }
  }

  render() {
    return (
      <View>
        <Text style={[styles.text, {
          color: this.props.colors.text
        }]}>
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
    fontSize: contentFontSize
  }
});

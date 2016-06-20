import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {affirmation} from '../constants/titles';
import {contentFontSize, margin, dayDark} from '../constants/style';
import JournalTextInput from './JournalTextInput';

export default class SingleAnswerBlock extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    value: PropTypes.string
  }

  static defaultProps = {
    value: ''
  }

  inputProps() {
    return {
      onChangeText: this.props.onChangeText,
      value: this.props.value,
      styles: {
        text: {
          color: this.props.textColor
        },
        input: {
          borderBottomColor: this.props.textColor
        }
      }
    }
  }

  styles() {
    return StyleSheet.create({
      container: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
      },
      text: {
        fontSize: contentFontSize,
        marginTop: margin,
        marginBottom: margin,
        color: this.props.textColor
      }
    });
  }

  render() {
    let styles = this.styles();
    return (<View>
      <Text style={styles.text}>{this.props.title}</Text>
      <View style={styles.container}>
        <JournalTextInput {...this.inputProps()}></JournalTextInput>
      </View>
    </View>)
  }

}

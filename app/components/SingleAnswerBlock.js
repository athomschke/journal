import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
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

  styles() {
    return StyleSheet.create({
      container: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
      },
      headline: {
        fontSize: contentFontSize,
        marginTop: margin,
        marginBottom: margin,
        color: this.props.textColor
      },
      text: {
        color: this.props.textColor
      },
      input: {
        height: 20,
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: this.props.textColor
      }
    });
  }

  render() {
    let that = this;
    let styles = this.styles();
    return (<View>
      <Text style={styles.headline}>{this.props.title}</Text>
      <View style={[styles.input, styles.container]}>
        <TextInput
          value={this.props.value}
          style={[styles.text, styles.input]}
          onChangeText = {that.props.onChangeText.bind(that)}
        ></TextInput>
      </View>
    </View>)
  }

}

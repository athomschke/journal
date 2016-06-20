import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {affirmation} from '../constants/titles';
import {contentFontSize, margin, dayDark} from '../constants/style';
import JournalTextInput from './JournalTextInput';
import { cloneDeep } from 'lodash';

export default class SingleAnswerBlock extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    value: []
  }

  onChangeText(index, aString) {
    let newValue = cloneDeep(this.props.value);
    newValue[index] = aString;
    this.props.onChangeText(newValue);
  }

  inputProps() {
    return {
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
      description: {
        width: 15,
        marginRight: margin,
        color: this.props.textColor
      },
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
    let that = this;
    let styles = this.styles();
    return (<View>
      <Text style={styles.text}>{this.props.title}</Text>
      <View style={styles.container}>
        <Text style={[styles.description]}>1.</Text>
        <JournalTextInput
          {...this.inputProps()}
          onChangeText={(aString) => {
            that.onChangeText(0, aString)
          }}
          value = { this.props.value[0] || '' }
        ></JournalTextInput>
      </View>
      <View style={styles.container}>
        <Text style={[styles.description]}>2.</Text>
        <JournalTextInput
          {...this.inputProps()}
          onChangeText={(aString) => {
            that.onChangeText(1, aString)
          }}
          value = { this.props.value[1] || '' }
        ></JournalTextInput>
      </View>
      <View style={styles.container}>
        <Text style={[styles.description]}>3.</Text>
        <JournalTextInput
          {...this.inputProps()}
          onChangeText={(aString) => {
            that.onChangeText(2, aString)
          }}
          value = { this.props.value[2] || '' }
        ></JournalTextInput>
      </View>
    </View>)
  }

}

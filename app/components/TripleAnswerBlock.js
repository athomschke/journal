import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
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
        <Text style={[styles.description]}>1.</Text>
        <TextInput
          style={[styles.text, styles.input]}
          onChangeText={(aString) => {
            that.onChangeText(0, aString)
          }}
          value = { this.props.value[0] || '' }
        ></TextInput>
      </View>
      <View style={[styles.input, styles.container]}>
        <Text style={[styles.description]}>2.</Text>
        <TextInput
          style={[styles.text, styles.input]}
          onChangeText={(aString) => {
            that.onChangeText(1, aString)
          }}
          value = { this.props.value[1] || '' }
        ></TextInput>
      </View>
      <View style={[styles.input, styles.container]}>
        <Text style={[styles.description]}>3.</Text>
        <TextInput
          style={[styles.text, styles.input]}
          onChangeText={(aString) => {
            that.onChangeText(2, aString)
          }}
          value = { this.props.value[2] || '' }
        ></TextInput>
      </View>
    </View>)
  }

}

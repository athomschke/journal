import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {improve} from '../../constants/titles';
import {contentFontSize, margin, nightLight} from '../../constants/style';
import JournalTextInput from '../JournalTextInput';

export default class Improve extends Component {

  render() {
    return (<View>
      <Text style={styles.text}>{improve}</Text>
      <View style={styles.container}>
        <JournalTextInput {...inputProps}></JournalTextInput>
      </View>
    </View>)
  }

}

const inputProps = {
  styles: {
    text: {
      color: nightLight
    },
    input: {
      borderBottomColor: nightLight
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    fontSize: contentFontSize,
    marginTop: margin,
    marginBottom: margin,
    color: nightLight
  }
});

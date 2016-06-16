import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {makesGreat} from '../../constants/titles';
import {contentFontSize, margin, dayDark} from '../../constants/style';
import JournalTextInput from '../JournalTextInput';

export default class MakesGreat extends Component {

  render() {
    return (<View>
      <Text style={styles.text}>{makesGreat}</Text>
      <View style={styles.container}>
        <JournalTextInput {...inputProps}></JournalTextInput>
      </View>
    </View>)
  }

}

const inputProps = {
  styles: {
    text: {
      color: dayDark
    },
    input: {
      borderBottomColor: dayDark
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
    color: dayDark
  }
});

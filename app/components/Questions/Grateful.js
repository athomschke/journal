import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {grateful} from '../../constants/titles';
import {contentFontSize, margin, dayDark} from '../../constants/style';
import JournalTextInput from '../JournalTextInput';

export default class Grateful extends Component {

  render() {
    return (<View>
      <Text style={styles.text}>{grateful}</Text>
      <View style={styles.container}>
        <Text style={[styles.description]}>1.</Text>
        <JournalTextInput {...inputProps}></JournalTextInput>
      </View>
      <View style={styles.container}>
        <Text style={[styles.description]}>2.</Text>
        <JournalTextInput {...inputProps}></JournalTextInput>
      </View>
      <View style={styles.container}>
        <Text style={[styles.description]}>3.</Text>
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
  description: {
    width: 15,
    marginRight: margin,
    color: dayDark
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
    color: dayDark
  }
});

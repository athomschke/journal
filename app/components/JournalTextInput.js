import React, { Component, PropTypes } from 'react';
import {StyleSheet, TextInput, Text, View } from 'react-native';

export default class JournalTextInput extends Component {

  static propTypes = {
		value: PropTypes.string,
    description: PropTypes.string,
    colors: PropTypes.object,
    onChangeText: PropTypes.func.isRequired
	};

	static defaultProps = {
		text: '',
		description: '',
    styles: {
      text: {
        color: '#000000'
      },
      input: {
        borderBottomColor: '#000000'
      }
    }
	}

  constructor(props) {
    super(props);
    this.state = {
      text: props.value
    }
  }

  onChangeText(text) {
    this.props.onChangeText(text);
  }

  render() {
    let that = this;
    return (
      <View style={[styles.input, this.props.styles.input]}>
        <TextInput style={[this.props.styles.text, styles.input]}
          onChangeText={that.onChangeText.bind(that)}
          value={that.props.value}
        ></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 20,
    flex: 1,
    borderBottomWidth: 1
  }
});

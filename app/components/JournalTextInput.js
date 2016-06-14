import React, { Component, PropTypes } from 'react';
import {StyleSheet, TextInput, Text } from 'react-native';

export default class JournalTextInput extends Component {

  static propTypes = {
		text: PropTypes.string
	};

	static defaultProps = {
		text: ''
	}

  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    }
  }

  onChangeText(text) {
    this.setState({text: text})
  }

  render() {
    let that = this;
    return (
      <TextInput
        style={styles.input}
        onChangeText={that.onChangeText.bind(that)}
        value={that.state.text}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    margin: 10,
    borderWidth: 1
  }
});

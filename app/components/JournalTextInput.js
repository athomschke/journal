import React, { Component, PropTypes } from 'react';
import {StyleSheet, TextInput, Text, View } from 'react-native';

export default class JournalTextInput extends Component {

  static propTypes = {
		value: PropTypes.string,
    description: PropTypes.string,
    colors: PropTypes.object
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
      text: props.text
    }
  }

  onChangeText(text) {
    this.setState({text: text})
  }

  render() {
    let that = this;
    return (
      <View style={[styles.input, this.props.styles.input]}>
        <TextInput style={this.props.styles.text}
          onChangeText={that.onChangeText.bind(that)}
          value={that.state.text}
        ></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderBottomWidth: 1,
  }
});

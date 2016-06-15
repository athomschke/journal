import React, { Component, PropTypes } from 'react';
import {StyleSheet, TextInput, Text, View } from 'react-native';

export default class JournalTextInput extends Component {

  static propTypes = {
		value: PropTypes.string,
    description: PropTypes.string
	};

	static defaultProps = {
		text: '',
		description: ''
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

  renderDescription() {
    if (this.props.description !== '') {
      return (<Text
        style={styles.description}
      >{this.props.description}</Text>);
    }
  }

  render() {
    let that = this;
    return (
      <View style={styles.container}>
        {this.renderDescription()}
        <View style={styles.inputContainer}><TextInput
          style={styles.input}
          onChangeText={that.onChangeText.bind(that)}
          value={that.state.text}
        /></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  description: {
    width: 15,
    color: '#48321E',
    marginRight: 10
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#48321E',
    color: '#48321E'
  },
  inputContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#48321E'
  },
  container: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 20
  }
});

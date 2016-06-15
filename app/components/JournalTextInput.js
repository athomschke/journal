import React, { Component, PropTypes } from 'react';
import {StyleSheet, TextInput, Text, View } from 'react-native';
import { margin } from '../constants/style';

export default class JournalTextInput extends Component {

  static propTypes = {
		value: PropTypes.string,
    description: PropTypes.string,
    colors: PropTypes.object
	};

	static defaultProps = {
		text: '',
		description: '',
    colors: {
      dark: '#FFFFFF'
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

  renderDescription() {
    if (this.props.description !== '') {
      return (<Text
        style={[styles.description, {
          color: this.props.colors.text
        }]}
      >{this.props.description}</Text>);
    }
  }

  render() {
    let that = this;
    return (
      <View style={styles.container}>
        {this.renderDescription()}
        <View style={[styles.inputContainer, {
          borderBottomColor: this.props.colors.text
        }]}><TextInput
          style={[styles.input, {
            borderBottomColor: this.props.colors.text,
            color: this.props.colors.text,
          }]}
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
    marginRight: margin
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
  },
  inputContainer: {
    flex: 1,
    borderBottomWidth: 1
  },
  container: {
    flexDirection: 'row',
    margin: margin,
    marginTop: 20
  }
});

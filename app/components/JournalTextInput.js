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

  renderDescription() {
    if (this.props.description !== '') {
      return (<Text style={[styles.description, this.props.styles.text]}>
          {this.props.description}
        </Text>
      );
    }
  }

  render() {
    let that = this;
    return (
      <View style={styles.container}>
        {this.renderDescription()}
        <View style={[styles.inputContainer, this.props.styles.input]}>
          <TextInput style={[styles.input, this.props.styles.text]}
            onChangeText={that.onChangeText.bind(that)}
            value={that.state.text}
          ></TextInput>
        </View>
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

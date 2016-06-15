import React, { Component, PropTypes } from 'react';
import JournalTextInput from './JournalTextInput';
import { View } from 'react-native';

export default class RoutineAnswer extends Component {

  static propTypes = {
    count: PropTypes.number,
    numbered: PropTypes.bool,
    colors: PropTypes.object
  };

  static defaultProps = {
    count: 1,
    numbered: false,
    colors: {
      dark: '#FFFFFF'
    }
  }

  renderAnswer(key) {
    let description = this.props.numbered ? '' + key + '.' : '';
    return <JournalTextInput
      key={key}
      description={description}
      colors={this.props.colors}
    ></JournalTextInput>
  }

  render() {
    let answers = [];
    for(let i = 1; i<=this.props.count; i++) {
      answers.push(this.renderAnswer(i));
    }
    return (<View>{answers}</View>)
  }
}

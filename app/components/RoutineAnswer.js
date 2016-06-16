import React, { Component, PropTypes } from 'react';
import JournalTextInput from './JournalTextInput';
import { View } from 'react-native';

export default class RoutineAnswer extends Component {

  static propTypes = {
    count: PropTypes.number,
    numbered: PropTypes.bool
  };

  static defaultProps = {
    count: 1,
    numbered: false
  }

  renderAnswer(key) {
    let description = this.props.numbered ? '' + key + '.' : '';
    return <JournalTextInput {...this.props}
      key={key}
      description={description}
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

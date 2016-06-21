import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import JournalEntryContainer from '../containers/JournalEntry';

export default class Journal extends Component {

  static propTypes = {
    pages: PropTypes.number.isRequired
  }

  render() {
    let pages = [];
    for (let i = 0; i<this.props.pages; i++) {
      pages.push(<JournalEntryContainer
        key={i}
        index={i}
      ></JournalEntryContainer>)
    }
    return (
      <View>{pages}</View>
    );
  }
}

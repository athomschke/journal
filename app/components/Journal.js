import React, { Component, PropTypes } from 'react';
import JournalEntryContainer from '../containers/JournalEntry';

export default class Journal extends Component {

  static propTypes = {
    pages: PropTypes.number.isRequired
  }

  render() {
    return (
      <JournalEntryContainer
        index={0}
      ></JournalEntryContainer>
    );
  }
}

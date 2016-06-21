import React, { Component } from 'react';
import JournalEntryContainer from '../containers/JournalEntry';

export default class Journal extends Component {

  render() {
    return (
      <JournalEntryContainer
        index={0}
      ></JournalEntryContainer>
    );
  }
}

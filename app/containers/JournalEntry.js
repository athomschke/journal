import React from 'react';
import { connect } from 'react-redux'
import JournalEntry from '../components/JournalEntry';
import { changeRoutineSection } from '../actions/writing';

const mapStateToProps = (state, ownProps) => {
  return {
    value: state[ownProps.index]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeRoutineSection: (anArray, sectionName) => {
      dispatch(changeRoutineSection(anArray, ownProps.index, sectionName));
    }
  }
}

const JournalEntryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalEntry)

export default JournalEntryContainer;

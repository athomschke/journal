import React from 'react';
import { connect } from 'react-redux'
import JournalEntry from '../components/JournalEntry';
import { changeAffirmation, changeAmazingThings, changeGrateful, changeImprove, changeMakesGreat } from '../actions/writing';

const mapStateToProps = (state, ownProps) => {
  return {
    value: state[ownProps.index]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeAffirmation: (anArray) => {
      dispatch(changeAffirmation(anArray, ownProps.index))
    },
    onChangeAmazingThings: (anArray) => {
      dispatch(changeAmazingThings(anArray, ownProps.index))
    },
    onChangeGrateful: (anArray) => {
      dispatch(changeGrateful(anArray, ownProps.index))
    },
    onChangeImprove: (anArray) => {
      dispatch(changeImprove(anArray, ownProps.index))
    },
    onChangeMakesGreat: (anArray) => {
      dispatch(changeMakesGreat(anArray, ownProps.index))
    },

  }
}

const JournalEntryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalEntry)

export default JournalEntryContainer;

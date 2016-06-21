import React from 'react';
import { connect } from 'react-redux'
import Journal from '../components/Journal';

const mapStateToProps = (state) => {
  return {
    pages: state.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const JournalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Journal)

export default JournalContainer;

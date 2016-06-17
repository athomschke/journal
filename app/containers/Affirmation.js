import React from 'react';
import { connect } from 'react-redux'
import Affirmation from '../components/Questions/Affirmation';
import { affirmationChange } from '../actions/writing';

const mapStateToProps = (state) => {
  return {
    value: state.affirmation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (aString) => {
      dispatch(affirmationChange(aString))
    }
  }
}

const AffirmationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Affirmation)

export default AffirmationContainer;

import React from 'react';
import { connect } from 'react-redux'
import Affirmation from '../components/Questions/Affirmation';
import { changeAffirmation } from '../actions/writing';

const mapStateToProps = (state) => {
  return {
    value: state.affirmation
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeText: (anArray) => {
      dispatch(changeAffirmation(anArray, ownProps.index))
    }
  }
}

const AffirmationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Affirmation)

export default AffirmationContainer;

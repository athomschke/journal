import React from 'react';
import { connect } from 'react-redux'
import MakesGreat from '../components/Questions/MakesGreat';
import { makesGreatChange } from '../actions/writing';

const mapStateToProps = (state) => {
  return {
    value: state.makesGreat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (aString) => {
      dispatch(makesGreatChange(aString))
    }
  }
}

const MakesGreatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MakesGreat)

export default MakesGreatContainer;

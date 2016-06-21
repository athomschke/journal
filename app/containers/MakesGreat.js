import React from 'react';
import { connect } from 'react-redux'
import MakesGreat from '../components/Questions/MakesGreat';
import { changeMakesGreat } from '../actions/writing';

const mapStateToProps = (state, ownProps) => {
  return {
    value: state[ownProps.index].makesGreat
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeText: (anArray) => {
      dispatch(changeMakesGreat(anArray, ownProps.index))
    }
  }
}

const MakesGreatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MakesGreat)

export default MakesGreatContainer;

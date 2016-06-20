import React from 'react';
import { connect } from 'react-redux'
import MakesGreat from '../components/Questions/MakesGreat';
import { changeMakesGreat } from '../actions/writing';

const mapStateToProps = (state) => {
  return {
    value: state.makesGreat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (aString) => {
      dispatch(changeMakesGreat(aString))
    }
  }
}

const MakesGreatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MakesGreat)

export default MakesGreatContainer;
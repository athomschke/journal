import React from 'react';
import { connect } from 'react-redux'
import AmazingThings from '../components/Questions/AmazingThings';
import { amazingThingsChange } from '../actions/writing';

const mapStateToProps = (state) => {
  return {
    value: state.amazingThings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (aString) => {
      dispatch(amazingThingsChange(aString))
    }
  }
}

const AmazingThingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AmazingThings)

export default AmazingThingsContainer;

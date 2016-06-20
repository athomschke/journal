import React from 'react';
import { connect } from 'react-redux'
import AmazingThings from '../components/Questions/AmazingThings';
import { changeAmazingThings } from '../actions/writing';

const mapStateToProps = (state) => {
  return {
    value: state.amazingThings
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeText: (anArray) => {
      dispatch(changeAmazingThings(anArray, ownProps.index))
    }
  }
}

const AmazingThingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AmazingThings)

export default AmazingThingsContainer;

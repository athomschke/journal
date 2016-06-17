import React from 'react';
import { connect } from 'react-redux'
import Grateful from '../components/Questions/Grateful';
import { gratefulChange } from '../actions/writing';

const mapStateToProps = (state) => {
  return {
    value: state.grateful
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (aString) => {
      dispatch(gratefulChange(aString))
    }
  }
}

const GratefulContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grateful)

export default GratefulContainer;

import React from 'react';
import { connect } from 'react-redux'
import Grateful from '../components/Questions/Grateful';
import { changeGrateful } from '../actions/writing';

const mapStateToProps = (state) => {
  return {
    value: state.grateful
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeText: (anArray) => {
      dispatch(changeGrateful(anArray, ownProps.index))
    }
  }
}

const GratefulContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grateful)

export default GratefulContainer;

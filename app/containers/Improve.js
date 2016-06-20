import React from 'react';
import { connect } from 'react-redux'
import Improve from '../components/Questions/Improve';
import { changeImprove } from '../actions/writing';

const mapStateToProps = (state) => {
  return {
    value: state.improve
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (aString) => {
      dispatch(changeImprove(aString))
    }
  }
}

const ImproveContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Improve)

export default ImproveContainer;

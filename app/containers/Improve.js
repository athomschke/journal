import React from 'react';
import { connect } from 'react-redux'
import Improve from '../components/Questions/Improve';
import { improveChange } from '../actions/writing';

const mapStateToProps = (state) => {
  return {
    value: state.improve
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (aString) => {
      dispatch(improveChange(aString))
    }
  }
}

const ImproveContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Improve)

export default ImproveContainer;

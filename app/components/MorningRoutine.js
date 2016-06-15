import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Routine from './Routine';
import {dayDark, dayLight, headlineFontSize, margin} from '../constants/style';

export default class MorningRoutine extends Component {
    render() {
      return (
        <Routine {...routine}></Routine>
      )
    }
}

const routine = {
  title: 'Morning Routine',
  content: [
    {
      title: 'I am grateful for…',
      count: 3,
      numbered: true
    }, {
      title: 'What would make today great?'
    }, {
      title: 'Daily affirmation:'
    }
  ]
}

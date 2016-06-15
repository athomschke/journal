import React, { Component } from 'react';
import Routine from './Routine';
import {dayDark, dayLight} from '../constants/style';

export default class MorningRoutine extends Component {
    render() {
      return (
        <Routine {...routine}></Routine>
      )
    }
}

const routine = {
  title: 'Morning Routine',
  colors: {
    text: dayDark,
    background: dayLight
  },
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

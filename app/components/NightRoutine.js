import React, { Component } from 'react';
import Routine from './Routine';
import {nightDark, nightLight} from '../constants/style';

export default class NightRoutine extends Component {
    render() {
      return (
        <Routine {...routine}></Routine>
      )
    }
}

const routine = {
  title: 'Night Routine',
  styles: {
    container: {
      backgroundColor: nightDark
    },
    text: {
      color: nightLight
    },
    input: {
      borderBottomColor: nightLight
    }
  },
  content: [
    {
      title: 'Three amazing things that happened today:',
      count: 3,
      numbered: true
    }, {
      title: 'How could I have made today better?'
    }
  ]
}

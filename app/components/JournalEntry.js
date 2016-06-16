import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import Routine from './Routine';
import {dayDark, dayLight, nightDark, nightLight} from '../constants/style';

export default class JournalEntry extends Component {

  render() {
    let renderedRoutines = [];
    routines.forEach((routine, i) => {
      renderedRoutines.push(<Routine {...routine}
        key={i}
      ></Routine>)
    })
    return (
      <ScrollView style={styles.scrollView}>
        {renderedRoutines}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});

let routines = [{
  title: 'Morning Routine',
  styles: {
    container: {
      backgroundColor: dayLight
    },
    text: {
      color: dayDark
    },
    input: {
      borderBottomColor: dayDark
    }
  },
  content: [
    {
      title: 'I am grateful for…',
      count: 3,
      numbered: true,
      value: ['a', 'b', 'c']
    }, {
      title: 'What would make today great?',
      value: ['d', 'e', 'f']
    }, {
      title: 'Daily affirmation:',
      value: 'g'
    }
  ]
}, {
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
      numbered: true,
      value: ['h', 'i', 'j']
    }, {
      title: 'How could I have made today better?',
      value: 'k'
    }
  ]
}]

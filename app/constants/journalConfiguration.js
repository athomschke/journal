import { dayDark, dayLight, nightDark, nightLight } from './style';

export const config = {
  routines: [{
    name: 'morning',
    title: 'Morning Routine',
    colorScheme: {
      text: dayDark,
      background: dayLight
    },
    sections: [{
      name: 'grateful',
      title: 'I am grateful for …',
      isList: true
    }, {
      name: 'makesGreat',
      title: 'What would make today great?',
      isList: false
    }, {
      name: 'affirmation',
      title: 'Daily affirmation …',
      isList: false
    }, {
      name: 'different',
      title: 'This is what I\'ll do differently today:',
      isList: false
    }]
  }, {
    name: 'night',
    title: 'Night Routine',
    colorScheme: {
      text: nightLight,
      background: nightDark
    },
    sections: [{
      name: 'amazingThings',
      title: 'Three amazing things that happened today:',
      isList: true
    }, {
      name: 'improve',
      title: 'How could I have made today better?',
      isList: false
    }]
  }]
}

import day from './day';
import { last, isEmpty } from 'lodash';

let isEntryEmpty = (entry) => {
  return isEmpty(entry.affirmation) &&
    isEmpty(entry.improve) &&
    isEmpty(entry.makesGreat) &&
    isEmpty(entry.grateful) &&
    isEmpty(entry.amazingThings)
}

const journal = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_AFFIRMATION':
    case 'CHANGE_AMAZING_THINGS':
    case 'CHANGE_GRATEFUL':
    case 'CHANGE_IMPROVE':
    case 'CHANGE_MAKES_GREAT':
      let newState = day(state, action);
      if(action.index === state.length - 1 && !isEntryEmpty(last(newState))) {
        newState.push({});
      }
      return newState;
    default:
      return state
  }
}

export default journal

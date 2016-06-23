import day from './day';
import { last, isEmpty } from 'lodash';
import { AsyncStorage } from 'react-native';

let isEntryEmpty = (entry) => {
  return isEmpty(entry.affirmation) &&
    isEmpty(entry.improve) &&
    isEmpty(entry.makesGreat) &&
    isEmpty(entry.grateful) &&
    isEmpty(entry.amazingThings)
}

const journal = (state = [{}], action) => {
  switch (action.type) {
    case 'CHANGE_ROUTINE_SECTION':
      state = day(state, action);
      if(action.index === state.length - 1 && !isEntryEmpty(last(state))) {
        state.push({});
      }
    case 'SET_INITIAL_STATE':
      AsyncStorage.setItem('Journal',  JSON.stringify({
        Journal: state
      }));
  }
  return state;
}

export default journal

import day from './day';
import { config } from '../constants/journalConfiguration';
import { last, isEmpty, flatten } from 'lodash';
import { AsyncStorage } from 'react-native';

let getSectionNames = () => {
  return flatten(config.routines.map((routine) => {
    return routine.sections.map((section) => {
      return section.name
    })
  }))
}

let isEntryEmpty = (entry) => {
  return !getSectionNames().find((name) => {
    return !isEmpty(entry[name]);
  })
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

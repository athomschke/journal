import day from './day';
import saveData from '../saveData';
import { last } from 'lodash';
import { isEntryEmpty } from './helpers.js';

let ensureLastEntryIsEmpty = (state) => {
  if(state.length === 0 || !isEntryEmpty(last(state))) {
    state.push({});
  }
  return state;
}

const journal = (state = [{}], action) => {
  switch (action.type) {
    case 'CHANGE_ROUTINE_SECTION': {
      state = day(state, action);

      if(action.index === state.length - 1) {
        ensureLastEntryIsEmpty(state);
      }
      while (state.length > 1 && isEntryEmpty(state[state.length - 1]) && isEntryEmpty(state[state.length - 2])) {
        state.splice(-1);
      }
      saveData(state);
      break;
    }
    case 'SET_INITIAL_STATE': {
      state = action.state;
      ensureLastEntryIsEmpty(state)
      break;
    }
  }
  return state;
}

export default journal

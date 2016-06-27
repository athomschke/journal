import day from './day';
import saveData from '../saveData';
import { last } from 'lodash';
import { isEntryEmpty } from './helpers.js';

const journal = (state = [{}], action) => {
  switch (action.type) {
    case 'CHANGE_ROUTINE_SECTION': {
      state = day(state, action);

      if(action.index === state.length - 1 && !isEntryEmpty(last(state))) {
        state.push({});
      }
      while (state.length > 1 && isEntryEmpty(state[state.length - 1]) && isEntryEmpty(state[state.length - 2])) {
        state.splice(-1);
      }
      saveData(state);
      break;
    }
    case 'SET_INITIAL_STATE': {
      state = action.state;
      break;
    }
  }
  return state;
}

export default journal

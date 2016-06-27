import { slice, concat } from 'lodash';

let newState = (state, action) => {
  let routineName = action.sectionName;
  let previous = slice(state, 0, action.index) || [];
  let current = state[action.index] || {};
  let newValue = {};
  newValue[routineName] = action.anArray;
  newValue['timestamp'] = newValue['timestamp'] || Date.now();
  let after = slice(state, action.index+1, state.length) || [];
  return concat(previous, [{ ...current, ...newValue }], after);
}

const day = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_ROUTINE_SECTION':
      return newState(state, action);
    default:
      return state
  }
}

export default day

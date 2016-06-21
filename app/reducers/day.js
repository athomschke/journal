import { slice, concat } from 'lodash';

let newState = (state, routineName, action) => {
  let previous = slice(state, 0, action.index) || [];
  let current = state[action.index] || {};
  let newValue = {};
  newValue[routineName] = action.anArray;
  let after = slice(state, action.index+1, state.length) || [];
  return concat(previous, [{ ...current, ...newValue }], after);
}

const day = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_AFFIRMATION':
      return newState(state, 'affirmation', action);
    case 'CHANGE_AMAZING_THINGS':
      return newState(state, 'amazingThings', action);
    case 'CHANGE_GRATEFUL':
      return newState(state, 'grateful', action);
    case 'CHANGE_IMPROVE':
      return newState(state, 'improve', action);
    case 'CHANGE_MAKES_GREAT':
      return newState(state, 'makesGreat', action);
    default:
      return state
  }
}

export default day

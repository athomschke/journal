import day from './day'

const journal = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_AFFIRMATION':
    case 'CHANGE_AMAZING_THINGS':
    case 'CHANGE_GRATEFUL':
    case 'CHANGE_IMPROVE':
    case 'CHANGE_MAKES_GREAT':
      state[action.index] = day(state[action.index], action);
      return state;
    case 'ADD_PAGE':
      return state.concat([{}])
  }
}

export default journal

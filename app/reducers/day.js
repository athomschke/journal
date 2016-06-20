const day = (state, action) => {
  switch (action.type) {
    case 'CHANGE_AFFIRMATION':
      return { ...state, ...{ affirmation: action.aString } }
    case 'CHANGE_AMAZING_THINGS':
      return { ...state, ...{ amazingThings: action.anArray } }
    case 'CHANGE_GRATEFUL':
      return { ...state, ...{ grateful: action.anArray } }
    case 'CHANGE_IMPROVE':
      return { ...state, ...{ improve: action.aString } }
    case 'CHANGE_MAKES_GREAT':
      return { ...state, ...{ makesGreat: action.aString } }
    default:
      return state
  }
}

export default day

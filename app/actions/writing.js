export const changeRoutineSection = (anArray, index, sectionName) => {
  return {
    type: 'CHANGE_ROUTINE_SECTION',
    anArray,
    index,
    sectionName
  }
}

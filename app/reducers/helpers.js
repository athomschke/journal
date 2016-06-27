import { config } from '../constants/journalConfiguration';
import { isEmpty, flatten } from 'lodash';

let getSectionNames = () => {
  return flatten(config.routines.map((routine) => {
    return routine.sections.map((section) => {
      return section.name
    })
  }))
}

export function isEntryEmpty(entry) {
  return !getSectionNames().find((name) => {
    if (entry[name]) {
      return entry[name].find((aValue) => {
        return !isEmpty(aValue)
      })
    } else {
      return false
    }
  })
}

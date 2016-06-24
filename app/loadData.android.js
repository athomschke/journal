import RNFS from 'react-native-fs';
import { setInitialState } from './actions/initial';

export default function (store) {
  let path = RNFS.DocumentDirectoryPath + '/myJournal.json';
  RNFS.exists(path)
    .then((doesExist) => {
      if (!doesExist) {
        return RNFS.writeFile(path, JSON.stringify([]), 'utf8');
      } else {
        return Promise.resolve(undefined);
      }
    })
    .then(() => {
      return RNFS.readFile(path, 'utf8');
    })
    .then((contents) => {
      try {
        store.dispatch(setInitialState(JSON.parse(contents)));
      } catch(e) {
        console.log('could not parse saved routines ' + e)
      }
    })
    .then(undefined, () => {
      store.dispatch(setInitialState([]));
    })
}

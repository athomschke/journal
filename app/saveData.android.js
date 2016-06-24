import RNFS from 'react-native-fs';

export default function (routines) {
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
    return RNFS.writeFile(path, JSON.stringify(routines), 'utf8');
  })
}

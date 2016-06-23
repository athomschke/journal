// ./node_modules/react-native/packager/packager.sh start --resetCache
import { createStore } from 'redux';
import journal from './reducers/journal';
import myData from './myJournal.json';

export default function () {
  return createStore(journal, myData);
};

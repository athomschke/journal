import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Journal from './app/Journal';

class AndroidJournal extends Component {
  render() {
    return (<Journal></Journal>);
  }
}

AppRegistry.registerComponent('Journal', () => AndroidJournal);

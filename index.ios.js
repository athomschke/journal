import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Journal from './app/Journal';

class IOSJournal extends Component {
  render() {
    return (<Journal></Journal>);
  }
}

AppRegistry.registerComponent('Journal', () => IOSJournal);

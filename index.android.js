import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Application from './app/Application';

class AndroidJournal extends Component {
  render() {
    return (<Application></Application>);
  }
}

AppRegistry.registerComponent('Journal', () => AndroidJournal);

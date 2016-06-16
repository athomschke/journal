import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {grateful} from '../../constants/titles';
import {contentFontSize, margin, dayDark} from '../../constants/style';
import TripleAnswerBlock from '../TripleAnswerBlock';

export default class Grateful extends Component {

  render() {
    return (<TripleAnswerBlock
        textColor={dayDark}
        title={grateful}
    ></TripleAnswerBlock>)
  }
}

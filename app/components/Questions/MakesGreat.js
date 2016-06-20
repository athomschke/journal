import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {makesGreat} from '../../constants/titles';
import {contentFontSize, margin, dayDark} from '../../constants/style';
import AnswerBlock from '../AnswerBlock';

export default class MakesGreat extends Component {

  render() {
    return (<AnswerBlock {...this.props}
        textColor={dayDark}
        title={makesGreat}
    ></AnswerBlock>)
  }

}

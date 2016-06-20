import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {grateful} from '../../constants/titles';
import {contentFontSize, margin, dayDark} from '../../constants/style';
import AnswerBlock from '../AnswerBlock';

export default class Grateful extends Component {

  render() {
    return (<AnswerBlock {...this.props}
        textColor={dayDark}
        title={grateful}
        isList={true}
    ></AnswerBlock>)
  }
}

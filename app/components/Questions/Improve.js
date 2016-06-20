import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {improve} from '../../constants/titles';
import {contentFontSize, margin, nightLight} from '../../constants/style';
import AnswerBlock from '../AnswerBlock';

export default class Improve extends Component {

  render() {
    return (<AnswerBlock {...this.props}
        textColor={nightLight}
        title={improve}
    ></AnswerBlock>)
  }

}

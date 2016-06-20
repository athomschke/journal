import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {amazingThings} from '../../constants/titles';
import {contentFontSize, margin, nightLight} from '../../constants/style';
import AnswerBlock from '../AnswerBlock';

export default class AmazingThings extends Component {

  render() {
    return (<AnswerBlock {...this.props}
        textColor={nightLight}
        title={amazingThings}
        isList={true}
    ></AnswerBlock>)
  }
}

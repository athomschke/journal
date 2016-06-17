import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {amazingThings} from '../../constants/titles';
import {contentFontSize, margin, nightLight} from '../../constants/style';
import TripleAnswerBlock from '../TripleAnswerBlock';

export default class AmazingThings extends Component {

  render() {
    return (<TripleAnswerBlock {...this.props}
        textColor={nightLight}
        title={amazingThings}
    ></TripleAnswerBlock>)
  }
}

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {improve} from '../../constants/titles';
import {contentFontSize, margin, nightLight} from '../../constants/style';
import SingleAnswerBlock from '../SingleAnswerBlock';

export default class Improve extends Component {

  render() {
    return (<SingleAnswerBlock {...this.props}
        textColor={nightLight}
        title={improve}
    ></SingleAnswerBlock>)
  }

}

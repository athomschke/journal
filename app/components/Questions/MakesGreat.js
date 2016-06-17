import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {makesGreat} from '../../constants/titles';
import {contentFontSize, margin, dayDark} from '../../constants/style';
import SingleAnswerBlock from '../SingleAnswerBlock';

export default class MakesGreat extends Component {

  render() {
    return (<SingleAnswerBlock {...this.props}
        textColor={dayDark}
        title={makesGreat}
    ></SingleAnswerBlock>)
  }

}

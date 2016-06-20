import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {affirmation} from '../../constants/titles';
import {contentFontSize, margin, dayDark} from '../../constants/style';
import AnswerBlock from '../AnswerBlock';

export default class Affirmation extends Component {

  render() {
    return (<AnswerBlock {...this.props}
        textColor={dayDark}
        title={affirmation}
    ></AnswerBlock>)
  }

}

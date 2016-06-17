import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {affirmation} from '../../constants/titles';
import {contentFontSize, margin, dayDark} from '../../constants/style';
import SingleAnswerBlock from '../SingleAnswerBlock';

export default class Affirmation extends Component {

  render() {
    return (<SingleAnswerBlock {...this.props}
        textColor={dayDark}
        title={affirmation}
    ></SingleAnswerBlock>)
  }

}

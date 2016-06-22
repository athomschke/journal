import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import {affirmation} from '../constants/titles';
import {contentFontSize, margin, dayDark} from '../constants/style';
import { cloneDeep } from 'lodash';

export default class AnswerBlock extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string),
    isList: PropTypes.bool
  }

  static defaultProps = {
    value: [],
    isList: false
  }

  onChangeText(index, aString) {
    let newValue = cloneDeep(this.props.value);
    newValue[index] = aString;
    this.props.onChangeText(newValue);
  }

  styles() {
    return StyleSheet.create({
      description: {
        width: 15,
        marginRight: margin,
        color: this.props.textColor
      },
      container: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
      },
      headline: {
        fontSize: contentFontSize,
        marginTop: margin,
        marginBottom: margin,
        color: this.props.textColor
      },
      text: {
        color: this.props.textColor
      },
      input: {
        height: 20,
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: this.props.textColor
      }
    });
  }

  renderInputLine(index) {
    let styles = this.styles();
    let that = this;
    return (<TextInput
      style={[styles.text, styles.input]}
      onChangeText={(aString) => {
        that.onChangeText(index, aString)
      }}
      value = { this.props.value[index] || '' }
    ></TextInput>)
  }

  renderNumbering(index, numbered) {
    let styles = this.styles();
    if (numbered) {
      return (<Text style={[styles.description]}>{'' + (index + 1) + '.'}</Text>)
    }
  }

  renderAnswerLine(index, numbered) {
    let styles = this.styles();
    return (<View>
      <View style={[styles.input, styles.container]}>
        {this.renderNumbering(index, numbered)}
        {this.renderInputLine(index)}
      </View>
    </View>)
  }

  renderTitle() {
    let styles = this.styles();
    return (<Text style={styles.headline}>{this.props.title}</Text>);
  }

  renderTripleInput() {
    return (<View>
      {this.renderTitle()}
      {this.renderAnswerLine(0, true)}
      {this.renderAnswerLine(1, true)}
      {this.renderAnswerLine(2, true)}
    </View>)
  }

  renderSingleInput() {
    return (<View>
      {this.renderTitle()}
      {this.renderAnswerLine(0, false)}
    </View>)
  }

  render() {
    if (this.props.isList) {
      return this.renderTripleInput();
    } else {
      return this.renderSingleInput();
    }
  }

}

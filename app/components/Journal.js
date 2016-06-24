import React, { Component, PropTypes } from 'react';
import { SrollView, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import JournalEntryContainer from '../containers/JournalEntry';

export default class Journal extends Component {

  static propTypes = {
    pages: PropTypes.number.isRequired
  }

  componentDidUpdate() {
      setTimeout(() => {
        this.refs.paging.scrollTo({
          x: Dimensions.get('window').width * ( Math.max(0, this.props.pages - 2)),
          y: 0,
          animated: false
        })
      }, 0)
  }

  render() {
    let pages = [];
    for (let i = 0; i<this.props.pages; i++) {
      pages.push(<View
          style={styles.container}
          key={i}
        >
          <JournalEntryContainer
            index={i}
          ></JournalEntryContainer>
      </View>)
    }
    return (
      <ScrollView style={styles.scrollView}
        pagingEnabled={true}
        horizontal={true}
        ref='paging'
      >
        {pages}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  container: {
    flex: 1
  }
});

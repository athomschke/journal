import React, { Component, PropTypes } from 'react';
import { SrollView, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import JournalEntryContainer from '../containers/JournalEntry';

export default class Journal extends Component {

  static propTypes = {
    pages: PropTypes.number.isRequired
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

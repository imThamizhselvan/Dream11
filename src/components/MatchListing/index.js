import React, { Component } from 'react';
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import { Container, Tab, Tabs} from 'native-base';
import Slider from 'DreamPrediction/src/components/Slider';
import styles from 'DreamPrediction/src/styles/index.style';
import Fixtures from 'DreamPrediction/src/containers/LandingPage/fixtures';
import Live from 'DreamPrediction/src/containers/LandingPage/live';

export default class MatchListing extends Component {
  static navigationOptions = {
    header: null,
  };
   render() {
      return (
        <Container>
        <Slider />
        <Tabs style={styles.WebViewPart}>
          <Tab heading="Fixtures" tabStyle={{backgroundColor: '#c51c22'}} activeTabStyle={{backgroundColor: '#c51c22'}}>
            <Fixtures />
          </Tab>
          <Tab heading="Archive" tabStyle={{backgroundColor: '#c51c22'}} activeTabStyle={{backgroundColor: '#c51c22'}}>
            <Live />
          </Tab>
        </Tabs>
        </Container>
      )
   }
}

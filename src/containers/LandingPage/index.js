import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Content, Tab, Tabs, Body, Button, Icon, Left, Title, connectStyle } from 'native-base';
import Slider from 'DreamPrediction/src/components/Slider';
import styles from 'DreamPrediction/src/styles/index.style';
import MatchListing from 'DreamPrediction/src/components/MatchListing';
import Fixtures from './fixtures';
import Live from './live';
import Results from './results';

export default class LandingPage extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Container>
        <Header style={styles.HeaderView}>
          <Body>
            <Title >TIPS 11</Title>
          </Body>
        </Header>
        <MatchListing />

      </Container>
    );
  }
}

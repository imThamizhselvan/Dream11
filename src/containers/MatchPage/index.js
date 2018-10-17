import React, {Component} from 'react';
import { View, StyleSheet, FlatList, WebView } from 'react-native';
import { Container, Header, Text, Content, Tab, ScrollView, Tabs, Body, Title, connectStyle, Left, Button, Icon } from 'native-base';
import styles from 'DreamPrediction/src/styles/index.style';
import ScrollNotification from 'DreamPrediction/src/components/ScrollNotification';
export default class MatchPage extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    const matchId = navigation.getParam('matchId', 'NO-ID');
    const matchUrl = navigation.getParam('matchUrl', 'some default value');
    const matchTeam = navigation.getParam('matchTeam', 'Cricket')
    return (
      <Container>
        <Header style={styles.HeaderView}>
          <Left>
            <Button transparent>
              <Icon name="md-arrow-back" onPress={()=> navigation.navigate('LandingPage')}/>
            </Button>
          </Left>
          <Body>
            <Title> Match - {matchId} {matchTeam}</Title>
          </Body>
        </Header>
        <WebView
          source={{uri: matchUrl }}
        />
      </Container>
    );
  }
}

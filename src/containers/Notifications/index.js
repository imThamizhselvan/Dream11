import React, {Component} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Container, Header, Content, Tab, ScrollView, Tabs, Body, Title, connectStyle, Left, Button, Icon } from 'native-base';
import styles from 'DreamPrediction/src/styles/index.style';
import ScrollNotification from 'DreamPrediction/src/components/ScrollNotification';
export default class Notifications extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    console.log('jiot');
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style={styles.HeaderView}>
          <Left>
            <Button transparent>
              <Icon name='home' onPress={()=> navigate('LandingPage')}/>
            </Button>
          </Left>
          <Body>
            <Title >Your Notifications</Title>
          </Body>
        </Header>
        <ScrollNotification />
      </Container>
    );
  }
}

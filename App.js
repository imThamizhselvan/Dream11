/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen'
import LandingPage from './src/containers/LandingPage';
import MatchPage from './src/containers/MatchPage';

const RootStack = createStackNavigator(
  {
    LandingPage: LandingPage,
    MatchPage: MatchPage,
  },
  {
    initialRouteName: 'LandingPage',
  }
);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timePassed: false
    };
  }

  componentDidMount() {
  // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.show();
    setTimeout(() => {
      SplashScreen.hide();
      console.log('asdfasfasasasasasfasd');
    },1000);
  }

  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import React, {Component} from 'react';
import { Container, Text } from "native-base";
import { WebView } from 'react-native';

export default class Live extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.dream11.com/leagues'}}
      />
    );
  }
}

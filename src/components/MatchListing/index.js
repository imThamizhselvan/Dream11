import React, { Component } from 'react';
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import { Container, Tab, Tabs, Button, Text, Content, Icon} from 'native-base';
import Slider from 'DreamPrediction/src/components/Slider';
import styles, { colors } from 'DreamPrediction/src/styles/index.style';
import Fixtures from 'DreamPrediction/src/containers/LandingPage/fixtures';
import Live from 'DreamPrediction/src/containers/LandingPage/live';

export default class MatchListing extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super(props);
    this.state = {
        cricket: true,
        football: false,
        Kabaddi: false
    };
  }

  selectedGame() {
    console.log('hit');

  }

  showSlider() {
    return (
      <Slider />
    );
  }
  showButton() {
    return (
      <View style={{flexDirection: "row", flex: 0.4, backgroundColor: colors.gradientColorSecond}}>
        <Button rounded style={[this.state.cricket?styles.activeButton: styles.inActiveButton]} >
          <Text style={[this.state.cricket?'': styles.inActiveText]}>Cricket</Text>
        </Button>
        <Button disabled rounded style={[this.state.Kabaddi?styles.activeButton: styles.inActiveButton]} >
          <Text style={[this.state.Kabaddi?'': styles.inActiveText]}>Kabaddi</Text>
        </Button>
        <Button disabled rounded style={[this.state.football?styles.activeButton: styles.inActiveButton]} >
          <Text style={[this.state.football?'': styles.inActiveText]}>Football</Text>
        </Button>
      </View>
    );
  }
  showTabs() {
    return (
      <Tabs tabBarUnderlineStyle={styles.TabStyle} style={styles.SliderPart}>
        <Tab heading="Fixtures" textStyle={{ color: colors.gray }} activeTextStyle={{ color: colors.red}} tabStyle={{ backgroundColor:colors.white, color: colors.red }} activeTabStyle={{backgroundColor: colors.white, color: colors.black }}>
          <ScrollView>
            <Fixtures />
          </ScrollView>
        </Tab>
        <Tab heading="Live" textStyle={{ color: colors.gray }} activeTextStyle={{ color: colors.red}} tabStyle={{ backgroundColor:colors.white, color: colors.red }} activeTabStyle={{backgroundColor: colors.white, color: colors.black }}>
          <Live />
        </Tab>
        <Tab heading="Results" textStyle={{ color: colors.gray }} activeTextStyle={{ color: colors.red}} tabStyle={{ backgroundColor:colors.white, color: colors.red }} activeTabStyle={{backgroundColor: colors.white, color: colors.black }}>
          <Live />
        </Tab>
      </Tabs>
    );
  }
  render() {
      return (
        <ScrollView style={{flex:1}}  stickyHeaderIndices={[2]}>
            {this.showButton()}
            {this.showSlider()}
            {this.showTabs()}
        </ScrollView>
      )
   }
}

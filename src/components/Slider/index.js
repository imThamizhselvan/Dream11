import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { Platform, StyleSheet, ScrollView, FlatList, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { ENTRIES1, ENTRIES2 } from 'DreamPrediction/src/static/entries';
import { sliderWidth, itemWidth } from 'DreamPrediction/src/styles/SliderEntry.style';
import styles, { colors } from 'DreamPrediction/src/styles/index.style';
import SliderEntry from './SliderEntry';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

export default class Slider extends React.Component {

  _renderLightItem ({item, index}) {
    return <SliderEntry data={item} even={false} />;
  }
  _renderItem ({item, index}) {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
  }

  carouselCards () {
    return (
      <View style={[styles.exampleContainer, styles.exampleContainerDark]}>
          <Carousel
            data={ENTRIES2}
            ref={(c) => { this._carousel = c; }}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            layout={'default'}
          />
      </View>
    );
  }

  gradient () {
      return (
          <LinearGradient
            colors={[colors.background1, colors.background2]}
            startPoint={{ x: 1, y: 0 }}
            endPoint={{ x: 0, y: 1 }}
            style={styles.gradient}
          />
      );
  }

  render() {
    const cards = this.carouselCards();
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ScrollView
            style={styles.scrollview}
            scrollEventThrottle={200}
            directionalLockEnabled={true}
          >
            {cards}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

import React, {Component} from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { Platform, StyleSheet, ScrollView, FlatList, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { ENTRIES1, ENTRIES2 } from 'DreamPrediction/src/static/entries';
import { sliderWidth, itemWidth } from 'DreamPrediction/src/styles/SliderEntry.style';
import styles, { colors } from 'DreamPrediction/src/styles/index.style';
import SliderEntry from './SliderEntry';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

export default class Slider extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }
  _renderItemWithParallax ({item, index}, parallaxProps) {
      return (
          <SliderEntry
            data={item}
            even={(index + 1) % 2 === 0}
            parallax={true}
            parallaxProps={parallaxProps}
          />
      );
  }

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

  carouselCards (number, title) {
    const { slider1ActiveSlide } = this.state;
    return (
      <View style={styles.exampleContainer}>
        <Carousel
          ref={c => this._slider1Ref = c}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
        />
        <Pagination
          dotsLength={ENTRIES1.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={colors.red}
          dotStyle={styles.paginationDot}
          inactiveDotColor={colors.black}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
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
    const cards = this.carouselCards(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
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

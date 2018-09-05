import React, { Component } from 'react';
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TimerCountdown from 'react-native-timer-countdown';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import styles, { colors } from 'DreamPrediction/src/styles/index.style';

export default class ScrollNotification extends Component {
  static navigationOptions = {
    header: null,
  };
   state = {
      names: [
         {'match': 'TNPL T20', 'id': 1, 'time': '45000000'},
         {'match': 'TNPL T20', 'id': 2, 'time': '45000000'},
         {'match': 'TNPL T20', 'id': 3, 'time': '45000000'},
         {'match': 'TNPL T20', 'id': 4, 'time': '45000000'},
         {'match': 'TNPL T20', 'id': 5, 'time': '45000000'},
         {'match': 'TNPL T20', 'id': 6, 'time': '45000000'},
         {'match': 'TNPL T20', 'id': 7, 'time': '45000000'},
         {'match': 'TNPL T20', 'id': 8, 'time': '45000000'}
      ]
   }
   render() {
      return (
         <View>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                      <View key={item.id}
                        style={styles.card}>
                        <LinearGradient
                            start={{x: 0.4, y: 0.4}} end={{x: 0.5, y: 0.9}}
                            colors={[colors.gradientColorFirst, colors.gradientColorSecond]}
                            style={styles.safeArea}
                        >
                          <View style={styles.oneFlexRow}>
                            <View style={styles.quarterFlex}>
                              <Image
                                style={styles.containFlex}
                                source={{uri: 'http://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png'}}
                                />
                            </View>
                            <View style={styles.halfFlex}>
                              <Text note style={{ fontSize: 16, color: '#9b9b9b', marginLeft: 65,  marginTop: 20, alignItems: 'center', justifyContent: 'center' }}> {item.match}</Text>
                              <TimerCountdown
                                  initialSecondsRemaining={item.time}
                                  onTick={secondsRemaining => console.log('tick', secondsRemaining)}
                                  onTimeElapsed={() => console.log('complete')}
                                  allowFontScaling={true}
                                  style={{ fontSize: 22, color: '#c61c23', marginLeft: 60,  marginTop: 15 }}
                              />
                            </View>
                            <View style={styles.quarterFlex}>
                              <Image
                                style={styles.containFlex}
                                source={{uri: 'http://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png'}}
                                />
                            </View>
                          </View>
                        </LinearGradient>
                      </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}

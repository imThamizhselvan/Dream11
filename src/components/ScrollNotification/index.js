import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import styles, { colors } from 'DreamPrediction/src/styles/index.style';

class ScrollNotification extends Component {
  static navigationOptions = {
    header: null,
  };
   state = {
      names: [
         {'match': 'TNPL T20', 'id': 1, 'time': '45000000', 'url': 'https://www.dream11.com/leagues' },
         {'match': 'TNPL T20', 'id': 2, 'time': '45000000', 'url': 'https://www.dream11.com/leagues' },
         {'match': 'TNPL T20', 'id': 3, 'time': '45000000', 'url': 'https://www.dream11.com/leagues' },
         {'match': 'fd T20', 'id': 4, 'time': '45000000', 'url': 'https://www.dream11.com/leagues' },
         {'match': 'afsa T20', 'id': 5, 'time': '45000000', 'url': 'https://www.dream11.com/leagues' },
         {'match': 'afasf T20', 'id': 6, 'time': '45000000', 'url': 'https://www.dream11.com/leagues' },
         {'match': 'TNPL T20', 'id': 7, 'time': '45000000', 'url': 'https://www.dream11.com/leagues' },
         {'match': 'TNPL T20', 'id': 8, 'time': '45000000', 'url': 'https://www.dream11.com/leagues' }
      ]
   }
   render() {
     const { navigate } = this.props.navigation;
     const uri = require('./csk.png');
      return (
        <FlatList
          style={styles.ScrollNotif}
          data={this.state.names}
          renderItem={({item}) => <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={()=> navigate('MatchPage', {
              matchId: item.id,
              matchUrl: item.url,
              matchTeam: item.match
            })}>
              <View style={styles.oneFlexRow}>
                <View style={styles.quarterFlex}>
                <Thumbnail
                  style={styles.containFlex}
                  source={require('./csk.png')}
                 />
                 <Text style={styles.teamName}> CSK</Text>
                </View>
                <View style={styles.halfFlex}>
                  <Text note style={{ fontSize: 16, color: '#9b9b9b', textAlign: 'center',  marginTop: 20 }}> {item.match}</Text>
                </View>
                <View style={styles.quarterFlex}>
                  <Thumbnail
                    style={styles.containFlex}
                    source={require('./mi.png')}
                 />
                 <Text style={styles.teamName}> MI</Text>
                </View>
              </View>
          </TouchableOpacity>
        }
        />

      )
   }
}

 export default withNavigation(ScrollNotification);

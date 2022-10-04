import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import MyFlightsStyles from './MyFlightsScreen.sass';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Avatar, Icon} from '@rneui/themed';
import {getData} from '../../database-service/ReservacionVuelos.service';
import Moment from 'moment';
import auth from '@react-native-firebase/auth';

export default MyFlightsScreen = props => {
  const [flights, setFlights] = useState([]);

  async function onScreenLoad(uid) {
    setFlights(await getData(uid));
  }
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        Alert.alert('Logged as: ' + user.email, 'User ID: ' + user.uid, [
          {text: 'OK'},
        ]);
        onScreenLoad(user.uid);
      }
    });
  }, []);
  return (
    <View style={MyFlightsStyles.Body}>
      <ScrollView>
        <Text style={MyFlightsStyles.title}>My flights</Text>
        {flights.length > 0 ? (
          flights.map(flight => {
            return (
              <TouchableOpacity key={flight.id}>
                <View style={MyFlightsStyles.containers}>
                  <Text style={MyFlightsStyles.placeAcronyms}>
                    {flight.origin[0]}
                  </Text>
                  <Icon
                    name="flight"
                    type="material"
                    color="#5C6DF8"
                    size={25}
                    style={MyFlightsStyles.iconFlight}
                  />
                  <Text style={MyFlightsStyles.placeAcronyms}>
                    {flight.destiny[0]}
                  </Text>
                </View>
                <View style={MyFlightsStyles.containers}>
                  <Text style={MyFlightsStyles.places}>{flight.origin[1]}</Text>
                  <Text style={MyFlightsStyles.places}>
                    {flight.destiny[1]}
                  </Text>
                </View>
                <View style={MyFlightsStyles.line}></View>
                <View style={MyFlightsStyles.containers}>
                  <Text style={MyFlightsStyles.details}>
                    {Moment(flight.date).format('d MMMM YYYY')}
                  </Text>
                  <Text style={MyFlightsStyles.details}>
                    {flight.passengers + ' '} passengers
                  </Text>
                </View>
                <View style={MyFlightsStyles.lineEnd}></View>
              </TouchableOpacity>
            );
          })
        ) : (
          <View>
            <Text>No Flights</Text>
          </View>
        )}

        <View style={MyFlightsStyles.containerAvatar}>
          <Avatar
            size={64}
            rounded
            icon={{name: 'plus', type: 'font-awesome'}}
            containerStyle={MyFlightsStyles.avatar}
            onPress={() => props.navigation.navigate('Booking')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

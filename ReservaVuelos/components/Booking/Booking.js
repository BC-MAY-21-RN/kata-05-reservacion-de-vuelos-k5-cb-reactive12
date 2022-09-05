import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import Appstyles from './Booking.sass';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.fromCountry = 'Serbia';
    this.fromCity = 'BEG';
    this.toCountry = 'Netherlands';
    this.toCity = 'AMS';
    this.date = '01/01/2020';
    this.pasengers = '1';
  }

  render() {
    return (
      <View style={Appstyles.BookingBody}>
        <Pressable
          onPress={() => this.props.navigation.goBack()}
          style={Appstyles.BackButton}>
          <Text style={Appstyles.BackButtonText}>Back</Text>
        </Pressable>
        <View style={Appstyles.BookingBodyContainer}>
          <View style={Appstyles.BookingResume}>
            <View
              style={[
                Appstyles.BookingResumeContainer,
                {
                  //display: 'none',
                  borderBottomColor: 'gray',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                },
              ]}>
              <View style={[Appstyles.CityLeft, Appstyles.PlaceWidth]}>
                <Text style={Appstyles.PlaceCity}>{this.fromCity}</Text>
                <Text style={Appstyles.PlaceCountry}>{this.fromCountry}</Text>
              </View>
              <Text>Icon</Text>
              <View style={[Appstyles.CityRight, Appstyles.PlaceWidth]}>
                <Text style={Appstyles.PlaceCity}>{this.toCity}</Text>
                <Text style={Appstyles.PlaceCountry}>{this.toCountry}</Text>
              </View>
            </View>
          </View>
          <View style={Appstyles.InputField}>
            <Text style={Appstyles.InputText}>Where are you now?</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}>
              <TextInput placeholder="Select Location" />
            </View>
          </View>
          <Pressable style={Appstyles.NextButton}>
            <Text style={Appstyles.NextButtonText}>Next</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

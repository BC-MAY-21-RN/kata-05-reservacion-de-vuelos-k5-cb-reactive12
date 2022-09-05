import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Appstyles from './Booking.sass';
import { Button } from '@rneui/base';

export default class Booking extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={Appstyles.BookingBody}>
        <Text style={Appstyles.Text}>Booking</Text>
        <Button title='Welcome'/>
      </View>
    );
  }
}

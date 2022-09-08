import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Button,
} from 'react-native';
import Appstyles from './Booking.sass';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DatePicker from 'react-native-date-picker';
import Moment from 'moment';

export default function App(props) {
  const [fromCountry, setFromCountry] = useState('Country1');
  const [fromCity, setFromCity] = useState('City1');
  const [toCountry, setToCountry] = useState('Country2');
  const [toCity, setToCity] = useState('City2');
  const [date, setDate] = useState(new Date());
  const [pasengers, setPasengers] = useState(0);
  const [screen, setScreen] = useState(0);

  let inputFilled = false;

  function renderSwitch() {
    switch (screen) {
      case 0:
        return (
          <View style={Appstyles.InputField}>
            <Text style={Appstyles.InputText}>Where are you now?</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}>
              <TextInput
                placeholder="Select Location"
                onChangeText={e => {
                  setFromCity(e);
                  inputFilled = true;
                }}
              />
            </View>
          </View>
        );
        break;
      case 1:
        return (
          <View style={Appstyles.InputField}>
            <Text style={Appstyles.InputText}>
              Where will you be flying to?
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}>
              <TextInput
                placeholder="Select Location"
                onChangeText={e => {
                  setToCity(e);
                  inputFilled = true;
                }}
              />
            </View>
          </View>
        );
        break;
      case 2:
        return (
          <View style={Appstyles.InputField}>
            <Text style={Appstyles.InputText}>Select Date</Text>
            <DatePicker date={date} onDateChange={setDate} />
          </View>
        );
        break;
      case 3:
        return (
          <View style={Appstyles.InputField}>
            <Text style={Appstyles.InputText}>How many passengers?</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}>
              <TextInput
                keyboardType="numeric"
                onChangeText={e => {
                  setPasengers(e);
                  inputFilled = true;
                }}
              />
            </View>
          </View>
        );
        break;
      case 4:
        return (
          <View style={Appstyles.InputField}>
            <Text style={Appstyles.InputText}>Your request was received.</Text>
          </View>
        );
        break;
    }
  }
  function renderSwitchResume() {
    return (
      <View style={Appstyles.RenderSwitchResume}>
        <View
          style={[
            Appstyles.BookingResumeContainer,
            {
              //display: 'none',
              borderBottomColor: 'gray',
              borderBottomWidth: StyleSheet.hairlineWidth,
            },
          ]}>
          {fromCity != 'City1' ? (
            <View style={[Appstyles.CityLeft, Appstyles.PlaceWidth]}>
              <Text style={Appstyles.PlaceCity}>{fromCity}</Text>
              <Text style={Appstyles.PlaceCountry}>{fromCountry}</Text>
            </View>
          ) : null}
          <Text>Icon</Text>
          <View style={[Appstyles.CityRight, Appstyles.PlaceWidth]}>
            {toCity != 'City2' ? (
              <View>
                <Text style={Appstyles.PlaceCity}>{toCity}</Text>
                <Text style={Appstyles.PlaceCountry}>{toCountry}</Text>
              </View>
            ) : null}
          </View>
        </View>
        {date != new Date() ? (
          <Text>{Moment(date).format('d MMMM YYYY')}</Text>
        ) : null}
      </View>
    );
  }
  return (
    <View style={Appstyles.BookingBody}>
      <Pressable
        onPress={() => props.navigation.goBack()}
        style={Appstyles.BackButton}>
        <Text style={Appstyles.BackButtonText}>Back</Text>
      </Pressable>
      <View style={Appstyles.BookingBodyContainer}>
        <View style={Appstyles.BookingResume}>
          {fromCity != 'City1' ? renderSwitchResume() : null}
        </View>
        {screen != 5 ? renderSwitch() : null}
        {screen != 4 ? (
          <Button
            title="Next"
            style={Appstyles.NextButton}
            onPress={() => {
              setScreen(screen + 1);
              inputFilled = false;
            }}
            //disabled={!inputFilled}
          ></Button>
        ) : (
          <Button
            title="Finish"
            style={Appstyles.NextButton}
            onPress={() => {
              setScreen(screen + 1);
              inputFilled = false;
            }}
            //disabled={!inputFilled}
          ></Button>
        )}
      </View>
    </View>
  );
}

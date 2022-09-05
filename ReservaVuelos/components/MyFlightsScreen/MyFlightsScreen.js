import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyFlightsStyles from './MyFlightsScreen.sass';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Avatar, Icon} from "@rneui/themed";

export default MyFlightsScreen = props => {
  return (
    <View>
      <Text style={MyFlightsStyles.title}>My flights</Text>
      <TouchableOpacity>
        <View style={MyFlightsStyles.containers}>
          <Text style={MyFlightsStyles.placeAcronyms}>BEG</Text>
          <Icon 
            name= 'flight'
            type= 'material'
            color= '#5C6DF8'
            size={25}
            style={MyFlightsStyles.iconFlight}
          />
          <Text style={MyFlightsStyles.placeAcronyms}>AMS</Text>
        </View>
        <View style={MyFlightsStyles.containers}>
          <Text style={MyFlightsStyles.places}>Serbia</Text>
          <Text style={MyFlightsStyles.places}>Netherlands</Text>
        </View>
        <View style={MyFlightsStyles.line}></View>
        <View style={MyFlightsStyles.containers}>
          <Text style={MyFlightsStyles.details}>September 3, 2020</Text>
          <Text style={MyFlightsStyles.details}>2 passengers</Text>
        </View>
        <View style={MyFlightsStyles.lineEnd}></View>
      </TouchableOpacity>
      <View style={MyFlightsStyles.containerAvatar}>
        <Avatar
            size={64}
            rounded
            icon={{name: 'plus', type: 'font-awesome'}}
            containerStyle={MyFlightsStyles.avatar}
            onPress={() => props.navigation.navigate('Booking')}
        />
      </View>
    </View>
  );
};

import * as React from 'react';
import {View, Text, FlatList} from 'react-native';
import MyFlightsStyles from './MyFlightsScreen.sass';
import {Avatar} from "@rneui/themed";
import MyFlights from './MyFlights';

export default MyFlightsScreen = props => {
  const datas = {
      "Flights": [
          {
              "id": 1,
              "salidaS": "BEG",
              "destinoS":"AMS",
              "salida": "Serbia",
              "destino":"Netherlands",
              "pasajeros": "2 passengers",
              "fecha": "September 3, 2020",
          },
          {
            "id": 2,
            "salidaS": "ARG",
            "destinoS":"MEX",
            "salida": "Argentina",
            "destino":"México",
            "pasajeros": "4 passengers",
            "fecha": "September 26, 2022",
          },
        ]}
  return (
    <View>
      <Text style={MyFlightsStyles.title}>My flights</Text>
      <View style={MyFlightsStyles.containerAvatar}>
        <Avatar
          size={64}
          rounded
          icon={{name: 'plus', type: 'font-awesome'}}
          containerStyle={MyFlightsStyles.avatar}
          onPress={() => props.navigation.navigate('Booking')}
        />
      </View>
      <FlatList
        vertical
        data={datas["Flights"]}
        keyExtractor={item => item.id}
        renderItem={MyFlights}
      />
    </View>   
  );
};

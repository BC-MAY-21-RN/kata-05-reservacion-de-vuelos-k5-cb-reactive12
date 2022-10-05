import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyFlightsStyles from './MyFlightsScreen.sass';
import {Icon} from "@rneui/themed";

export default MyFlightsScreen = ({item}) => {
  return (
      <TouchableOpacity>
        <View style={MyFlightsStyles.containers}>
          <Text style={MyFlightsStyles.placeAcronyms}>{item.salidaS}</Text>
          <Icon 
            name= 'flight'
            type= 'material'
            color= '#5C6DF8'
            size={25}
            style={MyFlightsStyles.iconFlight}
          />
          <Text style={MyFlightsStyles.placeAcronyms}>{item.destinoS}</Text>
        </View>
        <View style={MyFlightsStyles.containers}>
          <Text style={MyFlightsStyles.places}>{item.salida}</Text>
          <Text style={MyFlightsStyles.places}>{item.destino}</Text>
        </View>
        <View style={MyFlightsStyles.line}></View>
        <View style={MyFlightsStyles.containers}>
          <Text style={MyFlightsStyles.details}>{item.fecha}</Text>
          <Text style={MyFlightsStyles.details}>{item.pasajeros}</Text>
        </View>
        <View style={MyFlightsStyles.lineEnd}></View>
      </TouchableOpacity>
  );
};

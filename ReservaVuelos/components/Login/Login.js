import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';
import Appstyles from './Login.sass';
import {CheckBox} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Login(props) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const [email, setEmail] = useState("");
  const [emailInvalido, setEmailInvalido] = useState(true);
  const [_write, setWrite] = useState(false);
 
  function validEmail(_email) {
    let invalido = true;
    setWrite(true);
    if (_email != "" && _email.includes('@')) {
      invalido = false
      setEmail(_email)
    }
    setEmailInvalido(invalido);
  }

  return (
    <SafeAreaView>
      <View style={Appstyles.LoginBody}>
        <Text style={Appstyles.TextSign}>Sign Up</Text>
        <View>
          <Text style={Appstyles.Label}>First Name</Text>
          <TextInput style={Appstyles.Input} placeholder="Write your name" />
          <Text style={Appstyles.Label}>Email</Text>
          <TextInput style={Appstyles.Input}
            placeholder="Write your email"
            onChangeText={(_email) => validEmail(_email)}
          >{email}</TextInput>
          {emailInvalido && _write ? <Text style={Appstyles.emailRequire}>Invalid email</Text> : null}

          <Text style={Appstyles.Label}>Password</Text>
          <TextInput
            style={Appstyles.InputPassword}
            placeholder="Write your password"
            secureTextEntry={true}
          />
          <Text style={Appstyles.Require}>
            Use 8 or more characters with a mix of letters, numbers and simbols
          </Text>
        </View>
        <View style={Appstyles.caja}>
          <CheckBox
            center
            title="I agree to the Terms and Privacy Policy"
            checked={check1}
            onPress={() => setCheck1(!check1)}
          />
          <CheckBox
            center
            title="Suscribe for select product updates"
            checked={check2}
            onPress={() => setCheck2(!check2)}
          />
        </View>

        <View style={Appstyles.ButtonSignContainer}>
          <Button
            title="Sign Up"
            disabled={emailInvalido}
            onPress={() => props.navigation.navigate('Home')}
          />
        </View>
        <Text>or</Text>
        <View style={Appstyles.ButtonSignContainer}>
          <Button title="Sing Up with Google" color="blue"  />
        </View>
      </View>
    </SafeAreaView>
  );
}
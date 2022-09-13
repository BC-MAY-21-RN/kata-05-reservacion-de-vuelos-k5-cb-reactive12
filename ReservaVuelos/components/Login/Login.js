import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';
import Appstyles from './Login.sass'
import {CheckBox} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { firebaseConfig } from '../configFire/config';
import { initializeApp } from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';


export default function Login() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAcount = () =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      alert('Acount created!')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleSignIn = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      alert('Signed in!')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    })
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
            onChangeText={(text) => setEmail(text)}
          >{email}</TextInput>

          <Text style={Appstyles.Label}>Password</Text>
          <TextInput
            style={Appstyles.InputPassword}
            placeholder="Write your password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          >{password}</TextInput>
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
            title="Register"
            color="blue"
            onPress={handleCreateAcount}
          />
        </View>

        <View style={Appstyles.ButtonSignContainer}>
          <Button
            title="Login"
            disabled
            onPress={handleSignIn}
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
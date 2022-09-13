import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert} from 'react-native';
import Appstyles from './Login.sass'
import {CheckBox, Button, Icon} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { firebaseConfig } from '../configFire/config';
import { initializeApp } from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
export default function Login(props) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [data, setData] = useState({
    password: '',
    secureTextEntry: true,
    isValidPassword: true,
  })
  
  const handleCreateAcount = () =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      Alert.alert('Acount created!')
      const user = userCredential.user;
      Alert.alert(user)
    })
    .catch(error => {
      Alert.alert(error)
    })
  }
  const handleSignIn = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      alert('Signed in!')
      const user = userCredential.user;
      Alert.alert(user)
    })
    .catch(error => {
      Alert.alert(error)
    })
  }
  const handlePasswordChange = (value) => {
    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
    if( value.match(check) ) {
        setData({
            ...data,
            password: value,
            isValidPassword: true
        })
        setPassword(value);
    } else {
        setData({
            ...data,
            password: value,
            isValidPassword: false
        })
    }
  }
  const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
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
          <View style={Appstyles.password}>
            <TextInput
              autoComplete='password'
              placeholder='Write your password'
              secureTextEntry={data.secureTextEntry ? true : false}
              autoCapitalize='none'
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
            >
              {data.secureTextEntry ? 
                <Icon
                  name='eye-slash'
                  type='font-awesome-5'
                  size={20}
                  color='#5C6DF8'
                />
              :
                <Icon
                  name='eye'
                  type='font-awesome-5'  
                  size={20}
                  color='#5C6DF8'
                 />
              }
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? 
            <Text style={Appstyles.Require}>
              Use 8 or more characters with a mix of letters, numbers and simbols
            </Text>
          : 
            <Text style={Appstyles.errorMsg}>
              Password must be 8 characters long with a mix of letters, numbers and simbols.
            </Text>
          }
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

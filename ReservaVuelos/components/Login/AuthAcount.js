import React from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

  export const handleCreateAcount = (props,email, password) =>{
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('User account created & signed in!');
        props.navigation.navigate('Home')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }
      });
  }
  export const handleSignIn = (props, email, password) =>{ 
    auth().signInWithEmailAndPassword(email, password)
    .then((userCredential)=>{
      console.log(auth, email, password)
      alert('Signed in!')
      const user = userCredential.user;
      props.navigation.navigate('Home')
    })
    .catch(error => {
      alert(error)
    })
  }
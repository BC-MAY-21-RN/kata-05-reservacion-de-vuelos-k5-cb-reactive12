import React, {useState} from 'react';
import {Text, 
        View, 
        SafeAreaView, 
        TextInput, 
        TouchableOpacity,
        ImageBackground,
        StyleSheet} from 'react-native';
import Appstyles from './Login.sass'
import GoogleSignInComponent from './GoogleSignIn'
import {CheckBox, Button, Icon} from '@rneui/themed';
import  {handleCreateAcount, handleSignIn}  from './AuthAcount';

export default function Login(props) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({
    password: '',
    secureTextEntry: true,
    isValidPassword: true,
  })
  
  const handlePasswordChange = (value) => {
    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
    setPassword(value)
    if( value.match(check) ) {
        setData({
            ...data,
            password: value,
            isValidPassword: true
        })
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
 const image = {uri: "https://media.istockphoto.com/photos/white-lines-and-spheres-picture-id1135638647?b=1&k=20&m=1135638647&s=170667a&w=0&h=j32QwPBMCmdX9ViKWvitis6N3l3Wl-lBEl1Ut9ImiBk="}
  return (
    <ImageBackground 
      source={image} 
      resizeMode="cover"
      style={Appstyles.image}>
    <SafeAreaView >
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
              >{password}</TextInput>
            <TouchableOpacity
              onPress={updateSecureTextEntry}>
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
            onPress={() => setCheck1(!check1)}/>
          <CheckBox
            center
            title="Suscribe for select product updates"
            checked={check2}
            onPress={() => setCheck2(!check2)}/>
        </View>
        <View style={Appstyles.ButtonSignContainer}>
          <Button
            title="Register"
            color="blue"
            onPress={()=>handleCreateAcount(props, email, password)}/>
        </View>

        <View style={Appstyles.ButtonSignContainer}>
          <Button
            title="Login"
            color="blue"
            onPress={()=>handleSignIn(props, email,password)}/>
        </View>
        <Text>or</Text>
        <View style={Appstyles.ButtonSignContainer}>
           <GoogleSignInComponent/> 
        </View>
        
      </View>
      
    </SafeAreaView>
    </ImageBackground>
  );
}
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';
// import { withNavigation } from 'react-navigation'

const Login = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const credentials = { email, password };
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        // Handle successful login
        alert("login successfull")
        navigation.navigate("Movie");
      } else {
        // Handle login error
        // console.log(response)
        alert("login not successfull")
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <View style={styles.container}>
         <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="enter email"
        value={email}
        onChangeText={setemail}
      />
      <TextInput
        style={styles.input}
        placeholder="enter Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {/* <Button color ="orange" title='explore movies' onPress={handleLogin}></Button> */}
      <Button title="Login" onPress={handleLogin} />
      <Text> Email : eve.holt@reqres.in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop:5,
    borderColor:"orange",
    width:"50%",

  },
  input: {
    width: '100%',
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  heading:{
    fontSize:15,
    marginTop:10,
},
});

export default Login;
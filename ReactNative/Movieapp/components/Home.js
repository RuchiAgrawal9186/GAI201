import { View, Text, Button,StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import Login from './Login';

const Home = ({navigation}) => {
  return (
    <View style={{ alignItems:"center",justifyContent:"center"}}>
      <Text style={styles.heading}>Welcome to movie app</Text>
      <Login navigation={navigation}></Login>
      {/* <View style={styles.moviebtn}>r
        <Login></Login>
      {/* <Button color ="orange" title='explore movies' onPress={()=> navigation.navigate("Movie")}></Button> */}
      {/* </View> */} 
      
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        marginTop:15,
    },
    moviebtn:{
       width:"75%",
       marginTop:15,
    }

})

export default Home
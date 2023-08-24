import { View, Text, Button,StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{ flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={styles.heading}>Welcome to movie app</Text>
      <View style={styles.moviebtn}>
      <Button color ="orange" title='explore movies' onPress={()=> navigation.navigate("Movie")}></Button>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
    },
    moviebtn:{
       width:"75%",
       marginTop:15,
    }

})

export default Home
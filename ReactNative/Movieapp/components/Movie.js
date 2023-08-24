import { View, Text, TextInput, Button ,StyleSheet, FlatList, Image} from 'react-native'
import React ,{useState}from 'react'

const Movie = () => {

  const [searchtext,setsearchtext] = useState("")
  const [movielist,setmovielist] = useState([])

  const handleInputChange = (inputtext) =>{
    setsearchtext(inputtext)
  }

  const handleInputClick = async() =>{
  //  console.log(searchtext)
  let res = await fetch(`http://www.omdbapi.com/?apikey=2c3d74d5&s=${searchtext}`)
  let moviedata = await res.json()
  setmovielist(moviedata.Search)

  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput}placeholder='find movie here...' value={searchtext}
      onChangeText={handleInputChange}/>
      <View style={styles.searchBtn}>
      <Button title='Search Movie' onPress={handleInputClick}></Button>
      </View>
      <View>
        {movielist && <Text style={{marginVertical:20,textAlign:"center",color:"green"}}>{movielist?.length} Movies found</Text>}
        <FlatList data={movielist} renderItem={({item}) =>{
          return (
            <View style={styles.movieContainer}>
              <Image style={{height:300,width:"100%"}} source={{ uri: item.Poster }}/>
              <Text style={styles.movietile}>{item.Title}</Text>
              <Text>Year : {item.Year}</Text>
            </View>
          )
        }}></FlatList>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    marginTop:90,
    alignItems:"center",
    justifyContent:"center"
  },
  searchInput:{
    width:"75%",
    borderColor:"#cccccc",
    borderWidth:1,
    padding:10,
    backgroundColor:"#fff",
  },
  searchBtn:{
    width:"50%",
    marginTop:20
  },
  movietile:{
    fontSize:15,
    fontWeight:"bold"
  },
  movieContainer:{
   marginHorizontal:5,
   marginBottom:30,
   borderColor:"orange",
   borderWidth:2,
   padding:5
  }
})

export default Movie
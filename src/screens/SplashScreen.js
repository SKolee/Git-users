import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SplashScreen = ({navigation}) => {
  setTimeout(()=>{
    navigation.replace('Main')
  },2000)
  return (
    <View style={styles.viewStyle}>
        <Image 
        style={{
          width:400,
          height:450,
          margin:20,
          marginTop:80
        }}
        source={require('./Images/GitDark.jpg')}/>
        <Text style={{fontSize:50,color:'#e6b800',fontFamily:'Silkscreen-Bold',}} >Welcome!!</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  viewStyle:{
    flex:1,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#20272D'
  }
})

export default SplashScreen

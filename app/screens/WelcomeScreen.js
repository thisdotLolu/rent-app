import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import { useEffect } from 'react';


function WelcomeScreen(props) {
    
    return (
        <ImageBackground
        blurRadius={10}
        style={styles.container}
        source={require('../assets/background.jpg')}
        >
    
          <View
          style={styles.logoContainer}
          >
          <Image 
          style={styles.logo}
          source={require('../assets/logo-red.png')}>
          </Image>
          <Text
          style={styles.tagLine}
          >Rent It</Text>
          </View>

          <View
          style={styles.buttonsContainer}
          >
          <AppButton
          title='Login'
         
          />
          <AppButton
          title='Register'
          color='secondary'
          ></AppButton>
          </View>
          
          
          
        </ImageBackground>    
    );
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      width:'100%',
      height:'100%',
      resizeMode:'cover'
    },
    logo:{
      width:100,
      height:100,
    },
    logoContainer:{
      top:100,
      flex:2.5,
      width:'100%',
      justifyContent:'flex-start',
      alignItems:"center"
    },
   buttonsContainer:{
    width:'100%',
    padding:10
   },
   tagLine:{
    fontSize:25,
    fontWeight:'600',
    paddingVertical:20
   }
  });

export default WelcomeScreen;
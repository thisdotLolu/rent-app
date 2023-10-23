import { useWindowDimensions,StyleSheet,Dimensions,Text,View,SafeAreaView,Image, StatusBar, TouchableWithoutFeedback,TouchableOpacity,TouchableHighlight, Button, Alert,Platform ,ImageBackground} from 'react-native';
import {useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import { useEffect, useState } from 'react';
import Screen from './app/components/Screen';
import * as ImagePicker from 'expo-image-picker' 
import * as Permissions from 'expo-permissions'
import ImageAdder from './app/components/ImageAdder';
import InputField from './app/components/InputField';
import ImageInput from './app/components/ImageInput';

export default function App() {
  const[imageUri,setImageUri] = useState()
  
  
 
  
  useEffect(()=>{
    requestPermission();
  },[])

  const selectImage=async()=>{
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      if(!result.canceled){
        setImageUri(result.assets[0].uri)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
   <SafeAreaView
   style={styles.container}
   >
  <ImageInput
  imageUri={imageUri}
  onChangeImage={(uri)=>setImageUri(uri)}
  />
   </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    padding:10,
  }
})

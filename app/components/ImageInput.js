import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from "expo-image-picker";

function ImageInput({imageUri, onChangeImage}) {
    useEffect(()=>{
        requestPermission()
    },[])

    const requestPermission = async()=>{
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!granted) alert ('YOu need to enable permissions')
      }

    const selectImage = async ()=>{
        try{
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
          });
    
          console.log(result);
    
          if (!result.canceled) {
            onChangeImage(result.assets[0].uri);
          }
      
        }
        catch(error){
          console.log('error reading an image', error)
        }
      }

    const handlePress =()=>{
        if(!imageUri) selectImage()
        else Alert.alert('Delete', 'Are you sure you want to delete this image',
         [{text:'Yes', onPress:()=>onChangeImage(null)},
         {text:'No'}
        ])
    }



  return (
    <TouchableWithoutFeedback
    onPress={handlePress}
    >
        <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons
        color={colors.medium}
        name='camera'
        size={30}
        />}
        {imageUri && <Image source={{uri: imageUri}}
        style={styles.image}
        />}
    </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.light,
    borderRadius:15,
    alignItems:'center',
    height:100,
    justifyContent:'center',
    width:100,
    overflow:'hidden'
  },
  image:{
    width:'100%',
    height:'100%'
  }
});

export default ImageInput;
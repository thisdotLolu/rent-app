import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import color from '../color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'

function ImageInput({imageUri, onChangeImage}) {
    useEffect(()=>{
        requestPermission()
    },[])

    const requestPermission = async () =>{
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!granted)
        alert('You need to enable permission to access media')
      }

    const handlePress =()=>{
        if(!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete this image',[
            {
                text:'Yes',
                onPress:()=>onChangeImage(null)
            },
            {
                text:'No'
            }
        ])
    }

    const selectImage=async()=>{
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
          })
          if(!result.canceled){
            onChangeImage(result.assets[0].uri)
          }
        } catch (error) {
          console.log(error)
        }  
      }


  return (
    <TouchableWithoutFeedback>
        <View style={styles.container}>
        {!imageUri && (<MaterialCommunityIcons
        color='gray'
        />)}
        {imageUri && <Image
        source={{uri: imageUri}}
        style={styles.image}
        />}
    </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:color.faded,
    borderRadius: 15,
    justifyContnet:'center',
    alignItems:'center',
    height:100,
    width:100
  }, 
  image:{
    height:'100%',
    width:'100%'
  }
});

export default ImageInput;
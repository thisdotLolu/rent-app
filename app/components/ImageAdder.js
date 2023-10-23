import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker' 

function ImageAdder(props) {
    const [imageuri, setImageUri] = useState()
    const [imagesuri, setImageUris] = useState([])

    const selectImage = async() =>{
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsMultipleSelection:true,
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                aspect: [4, 3],
                quality: 1,
            })
            if(!result.canceled){
                setImageUri(result.assets[0].uri)
                result.assets.forEach((result)=>{
                    return setImageUris((prev)=>[...prev,result.uri])
                })
                console.log(result.assets)
            }
        } catch (error) {
            console.log(error)
        }}

  return (
    <View
    style={styles.outerContainer}
    >
        <View style={styles.container}>
        <MaterialCommunityIcons
        onPress={selectImage}
        name='camera'
        color='gray'        
        size={50}
        />
    </View>
    {/* <Image
        style={styles.image}
        source={{uri:imageuri}}
    /> */}
    {imagesuri?.map((iu)=>(
        <Image
        key={iu}
        style={styles.image}
        source={{uri:iu}}
        />
    ))}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'rgba(0,0,0,0.2)',
    height:100,
    width:100,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    height:100,
    width:100,
    borderRadius:10,
    margin:5,
  },
  outerContainer:{
    flexDirection:'row',
    width:'100%',
    height:'fit-content',
    flexWrap:'wrap',
    padding:5
  },
});

export default ImageAdder;
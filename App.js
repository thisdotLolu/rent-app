import React, { useEffect, useState } from "react";

import * as ImagePicker from "expo-image-picker";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";
import * as Permissions from 'expo-permissions'
import { Button, Image, Text, View } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo,{useNetInfo} from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const netInfo = useNetInfo();

  const demo = async()=>{
    try{
      await AsyncStorage.setItem('person',JSON.stringify({id:1}))
      const value = await AsyncStorage.getItem('person')
      const person = JSON.parse(value)
      console.log(person)
    }
    catch(err){
      console.log(err)
    } 
  }   
  demo()

  return (
    <View>

    </View>
  )
}

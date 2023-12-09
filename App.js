import React, { useEffect, useState } from "react";

import * as ImagePicker from "expo-image-picker";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";
import * as Permissions from 'expo-permissions'
import { Button, Image, Text } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import AppLoading from "expo-app-loading";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () =>{
    const user = await authStorage.getUser()
    if(user) setUser(user)
  }

  if(!isReady)
  return <AppLoading
  startAsync={restoreUser}
  onFinish={()=>setIsReady(true)}
  onError={()=>console.log('error')}
  />
  return (
    <AuthContext.Provider
    value={{user,setUser}}
    >
    <OfflineNotice/>
    <NavigationContainer
  theme={navigationTheme}
  >
    {user ? <AppNavigator/>:<AuthNavigator/>}
  </NavigationContainer>
    </AuthContext.Provider>
  )
}

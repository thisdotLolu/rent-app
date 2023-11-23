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



const Link =()=>{

  const navigation = useNavigation()
  return (
    <Button
    title='Click'
    onPress={()=>navigation.navigate('TweetDetails')}
    />
  )
}

const Tweets = ({navigation}) =>(
  <Screen>
    <Text>Tweets</Text>
    <Button
    title='View tweet'
    onPress={()=>navigation.navigate('TweetDetails',{id:4})}/>
    <Link/>
  </Screen>
)
const TweetDetails = ({route}) =>(
  <Screen>
    <Text>TweetDetails {route.params.id}</Text>
  </Screen>
)


const Account=()=>(
  <Screen>
    <Text>Account</Text>
  </Screen>
)
const Stack = createStackNavigator()
const StackNavigator = () =>(
  <Stack.Navigator
  screenOptions={{
    headerStyle:{
      backgroundColor:'dodgerblue'
    }
  }}
  >
    <Stack.Screen name='Tweets' component={Tweets}/>
    <Stack.Screen 
    name='TweetDetails' 
    component={TweetDetails}
    options={
      {
        headerStyle:{backgroundColor:'tomato'},
        // header
      }
    }
    />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator()

const TabNavigator=()=>(
  <Tab.Navigator
  tabBarOptions={{
    activeBackgroundColor:'tomato',
    activeTintColor:'white',
    inactiveTintColor:'black',
    inactiveBackgroundColor:'gray'
  }}
  >
    <Tab.Screen name='Feed' 
    component={StackNavigator}
    options={{
      tabBarIcon:({size,color})=> <MaterialCommunityIcons
      name='home'
      size={size}
      color={color}
      />
    }}
    />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
)


export default function App() {

  return <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>;
}

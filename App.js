import { useWindowDimensions,StyleSheet,Dimensions,Text,View,SafeAreaView,Image, StatusBar, TouchableWithoutFeedback,TouchableOpacity,TouchableHighlight, Button, Alert,Platform ,ImageBackground, TextInput, Switch} from 'react-native';
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
import ImageInputList from './app/components/ImageInputList';
import MessagesScreen from './app/screens/MessagesScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListItem from './app/components/ListItem';
import Icon from './app/components/Icon';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';




const categories = [
  {label:'Furniture', value:1},
  {label:'Clothing', value:2},
  {label:'Cameras', value:3},
]

export default function App() {
  const[imageUris,setImageUris] = useState([])

  const [firstName,setFirstName] = useState('')

  const handleAdd = uri =>{
    setImageUris([...imageUris, uri])
  }

  const handleRemove=uri=>{
    setImageUris(imageUris?.filter((imageUri)=>imageUri !== uri))
  }

  const [isNew, setIsNew] = useState(false)
  const [category, setCategory] = useState(categories[0]);

  return (
    <GestureHandlerRootView
    style={{flex: 1}}
    >
      <LoginScreen></LoginScreen>
    </GestureHandlerRootView>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    padding:10,
  }
})

import React from 'react';
import ListingsScreen from '../screens/ListingsScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import FeedNavigator from './FeedNavigator';
import { AccountNavigator } from './AccountNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListingButton from './NewListingButton';
import routes from './routes';


const Tab = createBottomTabNavigator()

function AppNavigator() {
  return (
    <Tab.Navigator
    >
        <Tab.Screen name='Feed' component={gestureHandlerRootHOC(FeedNavigator)}
        options={{
            headerShown:false,
            tabBarIcon:({size,color})=><MaterialCommunityIcons
            name='home' size={size} color={color}
            />
        }}
        />
        <Tab.Screen 
        name='ListingEdit' 
        component={gestureHandlerRootHOC(ListingEditScreen)}
        options={({navigation})=>({
          tabBarButton:()=>(
            <NewListingButton
            onPress={()=>navigation.navigate(routes.LISTING_DETAILS)}
            />
          )  
          })}/>

        <Tab.Screen 
        name='Account' 
        component={gestureHandlerRootHOC(AccountNavigator)}
        options={{
            tabBarIcon:({size,color})=>(
                <MaterialCommunityIcons
                name='account'
                size={size}
                color={color}
                />
            )
        }}
        />
    </Tab.Navigator>
  );
}


export default AppNavigator;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';


function OfflineNotice(props) {
    const netInfo = useNetInfo()

    if(netInfo.type !== 'unknown' && netInfo.isInternetReachable === false){
        return (
            <View style={styles.container}>
                <Text>No internet Connection</Text>
            </View>
          );
    }

    return null
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.primary,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    position:'absolute',
    zIndex:100,
    width:'100%',
    top: Constants.statusBarHeight
  },
  text:{
    color:colors.white
  }
});

export default OfflineNotice;
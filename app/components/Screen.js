import React from 'react'
import { SafeAreaView, StyleSheet, View} from 'react-native'
import Constants from 'expo-constants'
import { Platform } from 'react-native'


const Screen = ({children,style}) => {
  return (
    <SafeAreaView
    style={[styles.screen,style]}
    >
      <View
      style={styles.view}
      >
      {children}
      </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    paddingTop:Constants.statusBarHeight
  },
  view:{
    padding:Platform.OS === 'ios' ? 10 : 0
  }
})

export default Screen
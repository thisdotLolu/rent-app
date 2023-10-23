import React from 'react'
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';


import colors from '../color';


function AppButton ({title, onPress, color = 'primary'}){
    return (
        <TouchableOpacity
        style={[styles.button, {backgroundColor:colors[color]}]}
        onPress={onPress}
        >
            <View>
            <Text
            style={styles.text}
            >{title}</Text>
        </View>
        </TouchableOpacity>
        
    )
}



export default AppButton;

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.primary,
        width:'100%',
        height:50,
        padding:10,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    },
    text:{
        fontFamily: Platform.OS === 'android'?'Roboto' : 'Avenir',
        fontSize:20,
        color:'white'
    }
})
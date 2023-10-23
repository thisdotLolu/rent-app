import React from 'react'
import { View, StyleSheet, Image } from 'react-native'


import colors from '../color'
import AppText from './AppText'
function Card({title,subTitle,image}) {
  return (
    <View
    style={styles.card}
    >
        <Image
        style={styles.image}
        source={image}
        />
        <View
        style={styles.detailsContainer}
        >
        <AppText
        style={styles.title}
        >{title}</AppText>
        <AppText
        style={styles.subTitle}
        >{subTitle}</AppText>
        </View>
    </View>
  )
}

export default Card


const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:'#fff',
        marginBottom:20
    },
    image:{
        width:'100%',
        height:200,
        objectFit:'cover',
        overflow:'hidden'
    },
    detailsContainer:{
        padding:10
    },
    title:{
        marginBottom:20 
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:'bold'
    }
})
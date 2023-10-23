import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import AppText from './AppText';

function ListItem({title, subTitle, image}) {
  return (
    <View
    style={styles.container}
    >
        <Image
        source={image}
        style={styles.image}
        />
        <View
        style={styles.left}
        >
            <AppText
            style={styles.title}
            >
                {title}
            </AppText>
            <AppText
            style={styles.subTitle}
            >
                {subTitle}
            </AppText>
        </View>
    </View>
  )
}

export default ListItem;

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        marginTop:40,
        alignItems:'center',
    },
    image:{
        borderRadius:50,
        width:70,
        height:70,
        marginRight:10
    },
    left:{

    },
    title:{
        fontWeight:'600',
    },
    subTitle:{
        color:'gray'
    }
})
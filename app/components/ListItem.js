import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import AppText from './AppText';
import { TouchableHighlight } from 'react-native';
import color from '../color';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';

function ListItem({title, subTitle, IconComponent, image, onPress, renderRightActions}) {
  return (
    <Swipeable
    renderRightActions={renderRightActions}
    >
        <TouchableHighlight
    underlayColor={color.faded}
    onPress={onPress}
    >
         <View
    style={styles.container}
    >
        {IconComponent}
        {image && <Image
        source={image}
        style={styles.image}
        />}
        <View
        style={styles.left}
        >
            <AppText
            style={styles.title}
            >
                {title}
            </AppText>
            {subTitle && <AppText
            style={styles.subTitle}
            >
                {subTitle}
            </AppText>}
        </View>
    </View>
    </TouchableHighlight>
    </Swipeable>
    
   
  )
}

export default ListItem;

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        padding:20,
        alignItems:'center',
        backgroundColor:'#fff'
    },
    image:{
        borderRadius:50,
        width:70,
        height:70,
    },
    left:{
        marginLeft:10,
        justifyContent:'center'
    },
    title:{
        fontWeight:'600',
    },
    subTitle:{
        color:'gray'
    }
})
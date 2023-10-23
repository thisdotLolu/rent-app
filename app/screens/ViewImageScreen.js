import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../color'
import color from '../color';

function ViewImageScreen(props) {
    return (
        <SafeAreaView
        style={styles.container}
        >
            <View
            style={styles.top}
            >
            <View
            style={styles.topLeft}
            >
                <MaterialCommunityIcons
                name='close'
                color='white'
                size={30}
                />
            </View>    
            <View
            style={styles.topRight}
            >
                <MaterialCommunityIcons
                name='trash-can-outline'
                color='white'
                size={30}
                />
            </View>
            </View>

            <Image
            resizeMode='contain'
            style={styles.image}
            source={require('../assets/chair.jpg')}
            >

            </Image>
                
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    },
    top:{
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between",
        width:'100%',
        height:'fit-content'
    },
    topLeft:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    topRight:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        flex:1,
        width:'100%'
    }
})

export default ViewImageScreen;
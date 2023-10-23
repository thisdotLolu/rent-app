import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import AppText from '../components/AppText'
import color from '../color'
import ListItem from '../components/ListItem'

function ListingDetailsScreen() {
  return (
    <View>
        <Image
        style={styles.image}
        source={require('../assets/jacket.jpg')}
        />
        <View
        style={styles.detailsContainer}
        >
        <AppText
        style={styles.title}
        >Red jacket for sale</AppText>
        <AppText
        style={styles.price}
        >$100</AppText>
        <ListItem
        image={require('../assets/mosh.jpg')}
        title='David'
        subTitle = '5 listings'
        />
        </View>
        
    </View>
  )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    detailsContainer :{
        padding:20,
    },
    title:{
        fontSize: 24,
        fontWeight:'500'
    },
    price:{
        color:color.secondary,
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10 
    }
})
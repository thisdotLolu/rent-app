import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import AppText from "../components/Text";
import AppButton from "../components/Button";
import useApi from "../hooks/useApi";


function ListingsScreen({navigation}) {
  const getListingsApi = useApi(listingsApi.getListings)

  useEffect(()=>{
    getListingsApi.request()
  },[])

  // const loadListings = async()=>{
  //   setLoading(true)
  //   const response = await listingsApi.getListings();
  //   setLoading(false)

  //   if(!response.ok){
  //     setError(true)
  //     return
  //   }
  //   setError(false)
  //   console.log('response:',response)
  //   setListings(response.data)
  // }

  console.log(getListingsApi?.data)

  return (
    <Screen style={styles.screen}>
      {getListingsApi?.error && <>
      <AppText>Couldnt retrieve the listings</AppText>
      <AppButton title='Retry'
      onPress={loadListings}
      />
      </>}
      <ActivityIndicator
      animating={true}
      size={"large"}
      />
      <FlatList
        data={getListingsApi?.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={()=>navigation.navigate('ListingDetails', item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;

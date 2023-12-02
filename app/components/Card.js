import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";
import Text from "./Text";
import colors from "../config/colors";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ title, subTitle, imageUrl,onPress,thumbnailUrl}) {
  return (
    <TouchableWithoutFeedback
    onPress={onPress}
    >
      <View style={styles.card}>
      <Image 
      style={styles.image} 
      uri={imageUrl}
      preview={{uri: thumbnailUrl}}
      tint="light"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;

import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import color from '../color';

function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback
    onPress={onPress}
    >
        <View style={styles.container}>
        <MaterialCommunityIcons
        name='trash-can'
        size={35}
        color={color.faded}
        />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'red',
    width:70,
    justifyContent:"center",

  }
});

export default ListItemDeleteAction;
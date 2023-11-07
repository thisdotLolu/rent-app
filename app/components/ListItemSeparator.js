import React from 'react';
import { View, StyleSheet } from 'react-native';
import color from '../color';

function ListItemSeparator(props) {
  return (
    <View style={styles.separator}>

    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    width:'100%',
    height:1,
    backgroundColor:color.faded
  }
});

export default ListItemSeparator;
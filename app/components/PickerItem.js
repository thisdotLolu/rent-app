import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';

function PickerItem({label,onPress}) {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.container}>
     <AppText
     style={styles.text}
     >
        {label}
    </AppText>   
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  text:{
    padding:20
  }
});

export default PickerItem;
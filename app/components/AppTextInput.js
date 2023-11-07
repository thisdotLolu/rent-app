import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../color';


function AppTextInput({icon,...otherProps}) {
  return (
    <View style={styles.container}>
        {icon && <MaterialCommunityIcons
        name={icon}
        size={20}
        color={color.black}
        style={styles.icon}
        />}
        <TextInput
        style={styles.textInput}
        {...otherProps}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:color.faded,
    borderRadius: 25,
    flexDirection:'row',
    width:'100%',
    padding:15,
    marginVertical:10
  },
  textInput:{
    fontSize:16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
  },
  icon:{
    margin:10
  }
});

export default AppTextInput;
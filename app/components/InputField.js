import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import color from '../color';

function InputField({width,type, placeholder}) {
    const [text,setText] = useState('')
    console.log(text)
  return (
    <View style={[styles.container, {width}]}>
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={newText =>setText(newText)}
        defaultValue={text}
        value={text}
        keyboardType={type? type:'default'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:50,
    marginTop:10,
    marginBottom:10,
    backgroundColor:color.faded,
    justifyContent:'center',
    alignItems:'start',
    borderRadius:50,
    fontSize:'1.2rem'
  },
  input: {
    height: '100%',
    margin: 12,
    width:'100%'
  },
});

export default InputField;
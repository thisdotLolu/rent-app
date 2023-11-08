import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from './AppButton';
import { useFormikContext } from 'formik';

function SubmitButton({title}) {
    const {handleSubmit} = useFormikContext()
  return (
    <AppButton 
    title={title}
    style={styles.container}
    onPress={handleSubmit}  
    />
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default SubmitButton;
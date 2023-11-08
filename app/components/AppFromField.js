import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

function AppFromField({name, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext()
  return (
    <>
    <AppTextInput
    {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={()=>setFieldTouched(name)}
        />
        <ErrorMessage
        error={errors[name]}
        visible={touched[name]}  
        />
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AppFromField;
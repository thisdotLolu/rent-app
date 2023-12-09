import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import users from "../api/users";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const registerApi = useApi(users.register)
  const loginApi = useApi(auth.logIn)
  const auth = useAuth()
  const [error, setError] = useState();
    
  const handleSubmit = async(userInfo)=>{
    const result = await registerApi.request(userInfo);
    if(!result.ok){
      if(result.data) setError(result.data.error);
      else{
        setError('An unexpected error occured');
        console.log(result);
      }
     return; 
    }
    const {data:authToken} = await loginApi.request(
      userInfo.email,
      userInfo.password
    )
    auth.logIn(authToken);
  }
  return (
    <Screen style={styles.container}>
      <ActivityIndicator
      visible={registerApi.loading || loginApi.loading}
      />
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;

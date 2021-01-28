import React from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';

import {Formik} from 'formik';

import {styles} from './styles';
import FormButton from '../UI/FormButton/FormButton';
import {validationLoginSchema} from './validationLoginSchema';

const FormLogin = () => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={validationLoginSchema}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {(props) => (
        <>
          <Text style={styles.labelForm}>E-mail adress</Text>
          <TextInput
            style={styles.inputForm}
            value={props.values.email}
            onChangeText={props.handleChange('email')}
            placeholder="E-mail"
            placeholderTextColor="#9FABC2"
          />
          {props.errors.email && (
            <Text style={styles.errorText}>{props.errors.email}</Text>
          )}

          <Text style={styles.labelForm}>Password</Text>
          <TextInput
            style={styles.inputForm}
            value={props.values.password}
            onChangeText={props.handleChange('password')}
            placeholder="Password"
            placeholderTextColor="#9FABC2"
          />
          {props.errors.password && (
            <Text style={styles.errorText}>{props.errors.password}</Text>
          )}
          <TouchableOpacity style={styles.wrapperFormForgot}>
            <Text style={styles.wrapperFormForgotText}>Forgot password</Text>
          </TouchableOpacity>

          <FormButton title="Login" handeClick={props.handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default FormLogin;

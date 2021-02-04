import React from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';

import {Formik} from 'formik';

import {styles} from './styles';
import FormButton from '../UI/FormButton/FormButton';
import {validationRegistrSchema} from './validationRegistrSchema';
import { ISignUpForm } from '../../screens/Contact/ContactMain';

interface Props {
  goToSignUp:(values:ISignUpForm)=> void
}

const FormRegister = ({goToSignUp}:Props) => {
  return (
    <Formik
      initialValues={{fullname: '', email: '', password: ''}}
      validationSchema={validationRegistrSchema}
      onSubmit={(values) => {
        console.log(values);
        goToSignUp(values)
      }}>
      {(props) => (
        <>
          <Text style={styles.labelForm}>Full Name</Text>
          <TextInput
            style={styles.inputForm}
            value={props.values.fullname}
            onChangeText={props.handleChange('fullname')}
            placeholder="Full Name"
            placeholderTextColor="#9FABC2"
          />
          {props.errors.fullname && (
            <Text style={styles.errorText}>{props.errors.fullname}</Text>
          )}

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
            secureTextEntry={true}
            placeholderTextColor="#9FABC2"
          />
          {props.errors.password && (
            <Text style={styles.errorText}>{props.errors.password}</Text>
          )}

          <FormButton title="Sign up" handeClick={props.handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default FormRegister;

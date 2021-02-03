import React from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';

import {Formik} from 'formik';

import {styles} from './styles';
import FormButton from '../UI/FormButton/FormButton';

import {validationChangeSchema} from './ValidationChangeSchema';

interface Props {}

const FormChangePass = ({}: Props) => {
  return (
    <Formik
      initialValues={{oldPassword: '', newPassword: '', confirmPassword: ''}}
      validationSchema={validationChangeSchema}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {(props) => (
        <>
          <Text style={styles.labelForm}>Old password</Text>
          <TextInput
            style={styles.inputForm}
            value={props.values.oldPassword}
            onChangeText={props.handleChange('oldPassword')}
            placeholder="Old Password"
            secureTextEntry={true}
            placeholderTextColor="#9FABC2"
          />
          {props.errors.oldPassword && (
            <Text style={styles.errorText}>{props.errors.oldPassword}</Text>
          )}

          <Text style={styles.labelForm}>Create New Password</Text>
          <TextInput
            style={styles.inputForm}
            value={props.values.newPassword}
            onChangeText={props.handleChange('newPassword')}
            placeholder="New Password"
            secureTextEntry={true}
            placeholderTextColor="#9FABC2"
          />
          {props.errors.newPassword && (
            <Text style={styles.errorText}>{props.errors.newPassword}</Text>
          )}

          <TextInput
            style={[styles.inputForm, styles.lastInput]}
            value={props.values.confirmPassword}
            onChangeText={props.handleChange('confirmPassword')}
            placeholder="Re New Password"
            secureTextEntry={true}
            placeholderTextColor="#9FABC2"
          />
          {props.errors.confirmPassword && (
            <Text style={styles.errorText}>{props.errors.confirmPassword}</Text>
          )}

          <FormButton title="Save" handeClick={props.handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default FormChangePass;

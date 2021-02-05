import React from 'react';
import {Text, TextInput} from 'react-native';

import {Formik} from 'formik';

import {styles} from './styles';
import FormButton from '../UI/FormButton/FormButton';
import {validationForgot} from './validationForgot';

interface Props {
  goToChangePassword: () => void;
}

const FormForgotPassword = ({goToChangePassword}: Props) => {
  return (
    <Formik
      initialValues={{email: ''}}
      validationSchema={validationForgot}
      onSubmit={(values) => {
        console.log(values);
        goToChangePassword();
      }}>
      {(props) => (
        <>
          <Text style={styles.labelForm}>E-mail adress</Text>
          <TextInput
            style={styles.inputForm}
            value={props.values.email}
            onChangeText={props.handleChange('email')}
            placeholder="E-mail adress"
            placeholderTextColor="#9FABC2"
          />
          {props.errors.email && (
            <Text style={styles.errorText}>{props.errors.email}</Text>
          )}
          <FormButton title="Next" handeClick={props.handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default FormForgotPassword;

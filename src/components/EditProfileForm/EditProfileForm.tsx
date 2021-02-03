import React from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';

import {Formik} from 'formik';

import {styles} from './styles';
import FormButton from '../UI/FormButton/FormButton';
import EditProfileItem from '../EditProfileItem/EditProfileItem';

interface Props {}

const EditProfileForm = ({}: Props) => {
  return (
    <Formik
      initialValues={{
        fullName: 'George Hionidis',
        phoneNumber: '+7 707 811 11 11',
        email: 'georgeeblo@gmail.com',
        paymentMethod: 'Credit Card',
        deliveryAdress: 'Ualihanova, 69',
      }}
      // validationSchema={validationChangeSchema}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {(props) => (
        <>
          <EditProfileItem
            label="Full Name"
            valueDef={props.values.fullName}
            setValueDef={props.handleChange('fullName')}
            code="name"
          />

          <EditProfileItem
            label="Phone Nubmer "
            valueDef={props.values.phoneNumber}
            setValueDef={props.handleChange('phoneNumber')}
            code="phone"
          />

          <EditProfileItem
            label="E-mail adress"
            valueDef={props.values.email}
            setValueDef={props.handleChange('email')}
            code="email"
          />

          <EditProfileItem
            label="Payment Methods"
            valueDef={props.values.paymentMethod}
            setValueDef={props.handleChange('paymentMethod')}
            code="payment"
          />

          <EditProfileItem
            label="Delivery Adress"
            valueDef={props.values.deliveryAdress}
            setValueDef={props.handleChange('deliveryAdress')}
            code="adress"
          />
          <FormButton title="Save" handeClick={props.handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default EditProfileForm;

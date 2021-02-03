import React from 'react';
import {Text, ScrollView, ImageBackground, View} from 'react-native';
import EditProfileForm from '../../../components/EditProfileForm/EditProfileForm';
import FormChangePass from '../../../components/FormChangePass/FormChangePass';
import FormButton from '../../../components/UI/FormButton/FormButton';
import Heading from '../../../components/UI/Heading/Heading';

import {styles} from './styles';

export const ProfileInfo = ({route}: any) => {
  const {values} = route.params;

  return (
    <ScrollView style={styles.backgroundScrollView}>
      <ImageBackground
        style={styles.bgTopContainer}
        source={require('../../../assets/images/bgProfile.png')}
        imageStyle={styles.imageProfile}>
        <Text style={styles.textBgTop}>DigitalTm</Text>
      </ImageBackground>
      <View style={styles.wrapprFormContent}>
        <Heading marginTop={10}>Your profile</Heading>

        <EditProfileForm />
      </View>
    </ScrollView>
  );
};

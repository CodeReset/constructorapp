import React from 'react';
import {Text, ScrollView, ImageBackground, View} from 'react-native';
import FormChangePass from '../../../components/FormChangePass/FormChangePass';
import FormForgotPassword from '../../../components/FormForgotPassword/FormForgotPassword';
import Heading from '../../../components/UI/Heading/Heading';
import {Screens} from '../../../navigator/consts/ScreensName';
import navigationService from '../../../navigator/navigationService';

import {styles} from './styles';

const ForgotPassword = () => {
  const goToChangePassword = () => {
    navigationService.navigate(Screens.CONTACT_CHANGE_PASSWORD);
  };

  return (
    <ScrollView style={styles.backgroundScrollView}>
      <ImageBackground
        style={styles.bgTopContainer}
        source={require('../../../assets/images/bgProfile.png')}
        imageStyle={styles.imageProfile}>
        <Text style={styles.textBgTop}>DigitalTm</Text>
      </ImageBackground>

      <View style={styles.wrapprFormContent}>
        <Heading marginTop={10}>Forgot Password</Heading>
        <FormForgotPassword goToChangePassword={goToChangePassword} />
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

import React from 'react';
import {Text, ScrollView, ImageBackground, View} from 'react-native';
import FormChangePass from '../../../components/FormChangePass/FormChangePass';
import Heading from '../../../components/UI/Heading/Heading';

import {styles} from './styles';

export const ChangePassword = () => {
  return (
    <ScrollView style={styles.backgroundScrollView}>
      <ImageBackground
        style={styles.bgTopContainer}
        source={require('../../../assets/images/bgProfile.png')}
        imageStyle={styles.imageProfile}>
        <Text style={styles.textBgTop}>DigitalTm</Text>
      </ImageBackground>
      <View style={styles.wrapprFormContent}>
        <Heading marginTop={10}>Change Password</Heading>
        <FormChangePass />
      </View>
    </ScrollView>
  );
};

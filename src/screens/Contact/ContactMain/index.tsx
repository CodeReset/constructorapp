import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import FormLogin from '../../../components/FormLogin/FormLogin';
import FormRegister from '../../../components/FormRegister/FormRegister';
import TabProfileBar from '../../../components/TabProfileBar/TabProfileBar';
import {getToken} from '../../../helpers/tokenHelper';
import {Screens} from '../../../navigator/consts/ScreensName';
import navigationService from '../../../navigator/navigationService';
import {SELECT_TAB} from '../../../store/actions/menuAction';
import {
  authLogin,
  authSignup,
} from '../../../store/actionTypes/authentification';
import {AppStore} from '../../../store/store';

import {styles} from './style';

const tabs = [
  {
    id: 0,
    name: 'Login',
  },
  {
    id: 1,
    name: 'Sign up',
  },
];

export interface ITabs {
  id: number;
  name: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ISignUpForm {
  email: string;
  fullname: string;
  password: string;
}

export const ContactMain = () => {
  useEffect(() => {
    getTokenAsync();
  }, []);

  const getTokenAsync = async () => {
    const token = await getToken();
    if (token) {
      navigationService.navigate(Screens.CONTACT_PROFILE_INFO);
    }
  };

  const dispatch = useDispatch();

  const selectedTab = useSelector((state: AppStore) => state.authReducer.tab);

  const changeTab = (id: number) => {
    dispatch({type: SELECT_TAB, payload: id});
  };

  const goToChangePassword = () => {
    navigationService.navigate(Screens.CONTACT_FORGOT_PASSWORD);
  };

  const goToProfile = (values: ILoginForm) => {
    const {email, password} = values;
    dispatch(authLogin(email, password));
  };

  const goToSignUp = (values: ISignUpForm) => {
    const {email, fullname, password} = values;
    dispatch(authSignup(email, fullname, password));
  };

  return (
    <ScrollView style={styles.backgroundScrollView}>
      <ImageBackground
        style={styles.bgTopContainer}
        source={require('../../../assets/images/bgProfile.png')}>
        <Text style={styles.textBgTop}>DigitalTm</Text>
      </ImageBackground>

      <TabProfileBar tabs={tabs} selectedTab={selectedTab} setTab={changeTab} />

      <View style={styles.wrapprFormContent}>
        {selectedTab === 0 ? (
          <FormLogin
            goToChangePassword={goToChangePassword}
            goToProfile={goToProfile}
          />
        ) : (
          <FormRegister goToSignUp={goToSignUp} />
        )}
      </View>
    </ScrollView>
  );
};

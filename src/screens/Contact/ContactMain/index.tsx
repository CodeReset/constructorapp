import React, {useState} from 'react';
import {Text, View, ScrollView, ImageBackground} from 'react-native';

import FormLogin from '../../../components/FormLogin/FormLogin';
import FormRegister from '../../../components/FormRegister/FormRegister';
import TabProfileBar from '../../../components/TabProfileBar/TabProfileBar';

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

export const ContactMain = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const changeTab = (id: number) => {
    setSelectedTab(id);
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
        {selectedTab === 0 ? <FormLogin /> : <FormRegister />}
      </View>
    </ScrollView>
  );
};

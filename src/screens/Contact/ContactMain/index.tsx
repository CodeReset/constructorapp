import React, {useState} from 'react';
import {Text, View, ScrollView, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FormLogin from '../../../components/FormLogin/FormLogin';
import FormRegister from '../../../components/FormRegister/FormRegister';

import {styles} from './style';

const Tabs = [
  {
    id: 0,
    name: 'Login',
  },
  {
    id: 1,
    name: 'Sign up',
  },
];

interface ITabs {
  id: number;
  name: string;
}

export const ContactMain = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <ScrollView style={styles.backgroundScrollView}>
      <ImageBackground
        style={styles.bgTopContainer}
        source={require('../../../assets/images/bgProfile.png')}>
        <Text style={styles.textBgTop}>DigitalTm</Text>
      </ImageBackground>

      <View style={styles.tabWrapper}>
        <View style={styles.tabWrapperMain}>
          {/* Refactoring */}
          {!!Tabs.length &&
            Tabs.map((item: ITabs) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.tabItemAuthentif,
                  selectedTab === item.id && styles.activeTab,
                ]}
                onPress={() => setSelectedTab(item.id)}>
                <Text
                  style={[
                    styles.tabItemAuthentifText,
                    selectedTab === item.id && styles.activeTabText,
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          {/* Refactoring */}
        </View>
      </View>

      <View style={styles.wrapprFormContent}>
        {selectedTab === 0 ? <FormLogin /> : <FormRegister />}
      </View>
    </ScrollView>
  );
};

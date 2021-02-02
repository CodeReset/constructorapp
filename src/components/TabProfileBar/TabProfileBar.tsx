import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {ITabs} from '../../screens/Contact/ContactMain';

import {styles} from './style';

interface Props {
  tabs: ITabs[];
  selectedTab: number;
  setTab: (id: number) => void;
}

const TabProfileBar = ({tabs, selectedTab, setTab}: Props) => {
  return (
    <View style={styles.tabWrapper}>
      <View style={styles.tabWrapperMain}>
        {!!tabs.length &&
          tabs.map((item: ITabs) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.tabItemAuthentif,
                selectedTab === item.id && styles.activeTab,
              ]}
              onPress={() => setTab(item.id)}>
              <Text
                style={[
                  styles.tabItemAuthentifText,
                  selectedTab === item.id && styles.activeTabText,
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default TabProfileBar;

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import SvgTestAdditional from '../../assets/svg/SvgTestAdditional';

import {styles} from './styles';

interface Props {
  info: any;
  additional: any;
  setAdditionalC: (additional: any) => void;
}

const AditionalProduct = ({info, additional, setAdditionalC}: Props) => {
  return (
    <View style={styles.additionStyle}>
      {info?.additional?.length &&
        info?.additional.map((item: any) => (
          <TouchableOpacity
            onPress={() => setAdditionalC(item)}
            style={[
              styles.additionStyleItem,
              additional === item && styles.activeAdditionStyleItem,
            ]}
            key={item.id}>
            <SvgTestAdditional colorProps={additional === item} />
            <Text
              style={[
                styles.additionStyleItemText,
                additional === item && styles.activeAdditionStyleItemText,
              ]}>
              {item.name}
            </Text>
            <Text
              style={[
                styles.additionStyleItemPrice,
                additional === item && styles.activeAdditionStyleItemPrice,
              ]}>
              ${item.price}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default AditionalProduct;

import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import {styles} from './styles';

interface Props {
  info: any;
  size: any;
  setSizec: (size: any) => void;
}

const SizeProductList = ({info, size, setSizec}: Props) => {
  return (
    <View style={styles.qualityTopAlign}>
      <Text style={styles.qualityTopAlignText}>Size</Text>

      <View style={styles.wrapperSizeGramm}>
        {info?.size?.length &&
          info.size.map((item: any) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => setSizec(item)}
              style={[
                styles.itemSizeGramm,
                size === item && styles.activeItemSizeGramm,
              ]}>
              <Text
                style={[
                  styles.textSizeGramm,
                  size === item && styles.activeTextSizeGramm,
                ]}>
                {item.size} {item.val}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default SizeProductList;

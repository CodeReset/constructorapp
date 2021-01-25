import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ActiveUnderline from '../../assets/svg/ActiveUnderline';

import {ICategoryList} from '../../store/reducers/menu';
import {styles} from './styles';
interface Props {
  listItem: ICategoryList;
  activeCategory: number | null;
  changeActiveCategory: (item: ICategoryList) => void;
}

const CategoryItem = ({
  listItem,
  activeCategory,
  changeActiveCategory,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => changeActiveCategory(listItem)}>
      <Text
        style={[
          styles.itemText,
          activeCategory === listItem.categoryId && styles.activeCategory,
        ]}>
        {listItem.name}
      </Text>
      {activeCategory === listItem.categoryId && <ActiveUnderline />}
    </TouchableOpacity>
  );
};

export default CategoryItem;

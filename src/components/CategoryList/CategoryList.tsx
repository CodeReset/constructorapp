import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {ICategoryList} from '../../store/reducers/menu';
import CategoryItem from '../CategoryItem/CategoryItem';
import {styles} from './styles';

interface Props {
  list: ICategoryList[];
  activeCategory: number | null;
  changeActiveCategory: (item: ICategoryList) => void;
}

const CategoryList = ({list, activeCategory, changeActiveCategory}: Props) => {
  return (
    <ScrollView horizontal={true} style={styles.categoryList}>
      {!!list.length &&
        list.map((item: ICategoryList) => (
          <CategoryItem
            key={item.categoryId}
            listItem={item}
            activeCategory={activeCategory}
            changeActiveCategory={changeActiveCategory}
          />
        ))}
    </ScrollView>
  );
};

export default CategoryList;

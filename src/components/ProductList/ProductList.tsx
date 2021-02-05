import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {IProductList} from '../../store/reducers/menu';
import ProductItem from '../ProductItem/ProductItem';
import {styles} from './styles';

interface Props {
  list: IProductList[];
  addToCart: (item: IProductList) => void;
  goToDetailInformation: (item: IProductList) => void;
}

const ProductList = ({list, addToCart, goToDetailInformation}: Props) => {
  return (
    <ScrollView style={styles.productList} horizontal={true}>
      {list.map((item: IProductList) => (
        <ProductItem
          key={item.id}
          product={item}
          addToCart={addToCart}
          goToDetailInformation={goToDetailInformation}
        />
      ))}
    </ScrollView>
  );
};

export default ProductList;

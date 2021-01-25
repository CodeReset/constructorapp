import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {IProductList} from '../../store/reducers/menu';
import ProductItem from '../ProductItem/ProductItem';
import {styles} from './styles';

interface Props {
  list: IProductList[];
}

const ProductList = ({list}: Props) => {
  return (
    <ScrollView style={styles.productList} horizontal={true}>
      {list.map((item: IProductList) => (
        <ProductItem key={item.productId} product={item} />
      ))}
    </ScrollView>
  );
};

export default ProductList;

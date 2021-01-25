import React from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import CartIcon from '../../assets/svg/CartIcon';

import {IProductList} from '../../store/reducers/menu';
import {styles} from './styles';

interface Props {
  product: IProductList;
}

const ProductItem = ({product}: Props) => {
  return (
    <TouchableOpacity style={styles.itemProduct}>
      <Image source={{uri: product.img}} style={styles.itemProductImg} />
      <View style={styles.wrapperProdText}>
        <Text style={styles.headingText}>{product.name}</Text>
        <Text style={styles.headingTextDisc}>{product.description}</Text>
        <View style={styles.flexWrapFlex}>
          <Text style={styles.priceTextItem}>${product.price}</Text>
          <TouchableOpacity style={styles.buttonAddCart}>
            <CartIcon />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

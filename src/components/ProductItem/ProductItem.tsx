import React from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import CartIcon from '../../assets/svg/CartIcon';

import {IProductList} from '../../store/reducers/menu';
import {styles} from './styles';

interface Props {
  product: IProductList;
  addToCart: (item: IProductList) => void;
  goToDetailInformation: (item: IProductList) => void;
}

const ProductItem = ({product, addToCart, goToDetailInformation}: Props) => {
  return (
    <TouchableOpacity
      style={styles.itemProduct}
      onPress={() => goToDetailInformation(product)}>
      <Image source={{uri: product.img}} style={styles.itemProductImg} />
      <View style={styles.wrapperProdText}>
        <Text style={styles.headingText} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.headingTextDisc} numberOfLines={1}>
          {product.description}
        </Text>
        <View style={styles.flexWrapFlex}>
          <Text style={styles.priceTextItem}>{product.price} kzt</Text>
          <TouchableOpacity
            style={styles.buttonAddCart}
            onPress={() => addToCart(product)}>
            <CartIcon />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

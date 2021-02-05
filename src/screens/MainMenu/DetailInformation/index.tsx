import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ClockIcon from '../../../assets/svg/ClockIcon';
import FireCal from '../../../assets/svg/FireCal';
import StarIcon from '../../../assets/svg/StarIcon';
import WeightIcon from '../../../assets/svg/WeightIcon';
import AditionalProduct from '../../../components/AditionalProduct/AditionalProduct';
import SizeProductList from '../../../components/SizeProductList/SizeProductList';
import DetailScreenCount from '../../../components/UI/DetailScreenCount/DetailScreenCount';
import Heading from '../../../components/UI/Heading/Heading';

import {selectDetail} from './selectDetail';

import {
  ADD_TO_CART_MAIN,
  REMOVE_FROM_CART_MAIN,
} from '../../../store/actions/cartAdder';
import {AppStore} from '../../../store/store';

import {styles} from './style';

export const DetailInformation = () => {
  const dispatch = useDispatch();

  const info = useSelector((state: AppStore) => selectDetail(state));
  // const {info} = route.params;

  const addToCard = () => {
    console.log('Add to card');
  };

  // Refactor
  const [size, setSize] = useState({});

  // Refactor
  const [additional, setAdditional] = useState({});

  const changeSetSize = (sizer: any) => {
    setSize(sizer);
  };

  const changeSetAditional = (additionalize: any) => {
    setAdditional(additionalize);
  };

  const addToCart = () => {
    dispatch({type: ADD_TO_CART_MAIN, payload: info});
  };

  const removeFromCart = () => {
    dispatch({type: REMOVE_FROM_CART_MAIN, payload: info});
  };

  return (
    <ScrollView style={styles.containerWrapper}>
      <View style={styles.containerWrapper}>
        <ScrollView style={styles.scrollContainer}>
          <ImageBackground
            style={styles.imageBackground}
            imageStyle={styles.imageStyleBg}
            source={{uri: info.img}}></ImageBackground>
          <View style={styles.viewPaddingContent}>
            <Heading marginTop={40}>{info.name}</Heading>
            <Text style={styles.descriptionInfo}>
              Sake is produced by a leavining process and converting strach into
              sugar, It may sound simole, but the entire process can take a few
              month.
            </Text>

            <View style={styles.qualityTopAlign}>
              <Text style={styles.qualityTopAlignText}>Quality</Text>
              <DetailScreenCount
                count={info?.count || 0}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </View>

            <View style={styles.descriptionIcons}>
              <View style={styles.descriptionIconTeam}>
                <FireCal />
                <Text style={styles.textDescriptionLine}>130 cal</Text>
              </View>

              <View style={styles.descriptionIconTeam}>
                <ClockIcon />
                <Text style={styles.textDescriptionLine}>15-20 min</Text>
              </View>

              <View style={styles.descriptionIconTeam}>
                <StarIcon />
                <Text style={styles.textDescriptionLine}>4.9 vote</Text>
              </View>

              <View style={styles.descriptionIconTeam}>
                <WeightIcon />
                <Text style={styles.textDescriptionLine}>350g</Text>
              </View>
            </View>

            <SizeProductList info={info} size={size} setSizec={changeSetSize} />
            <AditionalProduct
              info={info}
              additional={additional}
              setAdditionalC={changeSetAditional}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.costTotalWrapper}>
        <Text style={styles.costTotalWrapperText}>${info.price}</Text>
        <TouchableOpacity style={styles.buttonAdderToCard} onPress={addToCard}>
          <Text style={styles.buttonAdderToCardText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

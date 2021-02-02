import {useFocusEffect} from '@react-navigation/native';
import React, {useRef} from 'react';
import {View, Dimensions} from 'react-native';

import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import YaMap, {Marker} from 'react-native-yamap';
import {useDispatch, useSelector} from 'react-redux';
import MarkerSVG from '../../../assets/svg/MarkerSVG';
import AdressItem from '../../../components/AdressItem/AdressItem';
import MapSheetHeader from '../../../components/MapSheetHeader/MapSheetHeader';
import FormButton from '../../../components/UI/FormButton/FormButton';
import {
  CHANGE_DEFAULT_ADRESS,
  SET_DEFAULT_ADRESS,
} from '../../../store/actions/menuAction';
import {IAdress} from '../../../store/reducers/order';
import {AppStore} from '../../../store/store';

YaMap.init('7c8715b4-c751-4593-9faf-124070435535');

import {styles} from './style';

const windowHeight = Dimensions.get('window').height;

export const CartMapAdress = () => {
  const map = useRef<any>(null);

  const dispatch = useDispatch();

  const activeAdress = useSelector(
    (state: AppStore) => state.orderReducer.selectedAdress,
  );

  const allAdresses = useSelector(
    (state: AppStore) => state.orderReducer.adresses,
  );

  const changeActiveAdress = (adress: IAdress) => {
    dispatch({type: CHANGE_DEFAULT_ADRESS, payload: adress});
    map.current.setCenter({lat: adress.lat, lon: adress.lon}, 16, 10, 0, 3);
  };

  const goToNextStep = () => {
    console.log('GO TO NEXT STEP');
  };

  useFocusEffect(
    React.useCallback(() => {
      map.current.setCenter(
        {lat: activeAdress.lat, lon: activeAdress.lon},
        16,
        10,
        0,
        3,
      );
    }, []),
  );

  return (
    <View style={styles.mapWrapper}>
      <YaMap ref={map} style={styles.mapStyle}>
        <Marker point={{lat: activeAdress?.lat, lon: activeAdress?.lon}}>
          <MarkerSVG />
        </Marker>
      </YaMap>

      <ScrollBottomSheet
        componentType="FlatList"
        snapPoints={[300, '50%', windowHeight - 240]}
        initialSnapIndex={2}
        renderHandle={() => (
          <View style={styles.header}>
            <View style={styles.panelHandle} />
          </View>
        )}
        data={allAdresses}
        keyExtractor={(item: IAdress) => item.id.toString()}
        renderItem={({item}: any) => (
          <AdressItem
            adress={item}
            activeAdressC={activeAdress}
            changeActiveAdress={changeActiveAdress}
          />
        )}
        ListHeaderComponent={() => (
          <MapSheetHeader activeAdress={activeAdress} />
        )}
        ListFooterComponent={() => (
          <View style={{paddingBottom: 40}}>
            <FormButton title="Next" handeClick={goToNextStep} />
          </View>
        )}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

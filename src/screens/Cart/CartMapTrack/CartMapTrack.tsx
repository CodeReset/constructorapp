import React, {useRef, useEffect} from 'react';

import YaMap from 'react-native-yamap';
import {styles} from './styles';

YaMap.init('7c8715b4-c751-4593-9faf-124070435535');
const CartMapTrack = () => {
  const map = useRef<any>(null);
  useEffect(() => {
    map.current.setCenter({lat: 43.25654, lon: 76.92848}, 14, 10, 0, 3);
  }, []);
  return <YaMap ref={map} style={styles.mapStyle}></YaMap>;
};

export default CartMapTrack;

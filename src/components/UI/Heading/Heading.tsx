import React from 'react';
import {Text} from 'react-native';

import {styles} from './styles';

interface Props {
  children: React.ReactNode;
  marginTop: number;
}

const Heading = ({children, marginTop = 0}: Props) => {
  return (
    <Text style={[styles.textHeading, {marginTop: marginTop}]}>{children}</Text>
  );
};

export default Heading;

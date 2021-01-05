import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import {Screens} from '../../../navigator/consts/ScreensName';
import navigationService from '../../../navigator/navigationService';
import {ADD_TEXT, REMOVE_USERS} from '../../../store/actions/menuAction';
import {getAllUsersTestRedux} from '../../../store/actionTypes/menuActionTypes';
import {AppStore} from '../../../store/store';

export const Main = () => {
  const dispatch = useDispatch();

  const users = useSelector((state: AppStore) => state.menuReducer.users);
  const texttest = useSelector((state: AppStore) => state.authReducer.text);
  const goTo = () => {
    dispatch({type: ADD_TEXT});
    dispatch(getAllUsersTestRedux());
    // navigationService.navigate(Screens.MENU_DETAILINFO_SCREEN);
  };
  const goRemove = () => {
    dispatch({type: REMOVE_USERS});
  };

  // useEffect(() => {
  //   dispatch(getAllUsersTestRedux());
  // }, [dispatch]);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>This is main page!!!</Text>
        {users.map((item: any) => (
          <Text key={item.id}>{item.name}</Text>
        ))}
        <Text>{texttest}</Text>
        <Button title="123212131" onPress={goTo} />
        <Button title="Remove data" onPress={goRemove} />
      </View>
    </ScrollView>
  );
};

import {Dispatch} from 'redux';
import Api from '../../api/Api';
import {DispatchType, GET_ALL_USERS} from '../actions/menuAction';

export const getAllUsersTestRedux = () => async (
  dispatch: Dispatch<DispatchType>,
) => {
  const {data} = await Api.testingApi.getAllUsersForTest();

  dispatch({type: GET_ALL_USERS, payload: data});
};

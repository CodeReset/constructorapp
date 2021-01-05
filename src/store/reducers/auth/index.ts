import {createStore} from 'redux';
import {
  DispatchType,
  GET_ALL_USERS,
  REMOVE_USERS,
  ADD_TEXT,
} from '../../actions/menuAction';

const initialState: any = {
  text: '',
};

export const authReducer = (
  state: any = initialState,
  action: DispatchType,
): any => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        text: 'Hello world',
      };
    default:
      return state;
  }
};

import {createStore} from 'redux';
import {
  DispatchType,
  GET_ALL_USERS,
  REMOVE_USERS,
} from '../../actions/menuAction';

const initialState: any = {
  users: [],
};

export const menuReducer = (
  state: any = initialState,
  action: DispatchType,
): any => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case REMOVE_USERS:
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

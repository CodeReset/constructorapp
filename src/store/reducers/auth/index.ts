import {
  SELECT_TAB,
  LOADER_OFF_AUTHENTIFICATION,
  LOADER_AUTHENTIFICATION,
} from '../../actions/menuAction';

const initialState: any = {
  text: '',
  tab: 0,
  loaderAuth: false,
};

export const authReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case SELECT_TAB:
      return {
        ...state,
        tab: action.payload,
      };

    case LOADER_AUTHENTIFICATION:
      return {
        ...state,
        loaderAuth: true,
      };

    case LOADER_OFF_AUTHENTIFICATION:
      return {
        ...state,
        loaderAuth: false,
      };

    default:
      return state;
  }
};

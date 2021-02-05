import {SELECT_TAB} from '../../actions/menuAction';

const initialState: any = {
  text: '',
  tab: 0,
};

export const authReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case SELECT_TAB:
      return {
        ...state,
        tab: action.payload,
      };

    default:
      return state;
  }
};

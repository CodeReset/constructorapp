import Api from '../../api/Api';
import axios from 'axios';
import {
  SET_ALL_MENU_CATEGORY,
  SET_ALL_MENU_PRODUCTS,
  LOADER_ACTIVATE,
  LOADER_OFF_ACTIVE,
} from '../actions/menuAction';

const getCategoryAndProducts = () => async (dispatch: any) => {
  dispatch({type: LOADER_ACTIVATE});
  Api.menuApi
    .getAllMenu()
    .then(
      axios.spread((...responses: any) => {
        dispatch({
          type: SET_ALL_MENU_CATEGORY,
          payload: responses[0]?.data?.data,
        });
        dispatch({
          type: SET_ALL_MENU_PRODUCTS,
          payload: responses[1]?.data?.data,
        });
      }),
    )
    .finally(() => {
      dispatch({type: LOADER_OFF_ACTIVE});
    });
};

export {getCategoryAndProducts};

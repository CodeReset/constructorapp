import Api from '../../api/Api';
import axios from 'axios';
import {
  SET_ALL_MENU_CATEGORY,
  SET_ALL_MENU_PRODUCTS,
} from '../actions/menuAction';

const getCategoryAndProducts = () => async (dispatch: any) => {
  Api.menuApi.getAllMenu().then(
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
  );
};

export {getCategoryAndProducts};

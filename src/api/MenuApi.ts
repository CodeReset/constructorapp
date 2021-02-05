import axios from 'axios';
import {GET_REQUEST} from '../helpers/consts';

export default class MenuApi {
  getAllMenu() {
    const category = axios.post(GET_REQUEST.menu.category);
    const products = axios.post(GET_REQUEST.menu.product);

    return axios.all([category, products]);
  }
}

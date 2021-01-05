import axios from 'axios';
import {GET_REQUEST} from '../helpers/consts';

export default class TestApi {
  getAllUsersForTest() {
    return axios.get(GET_REQUEST.getUsers);
  }
}

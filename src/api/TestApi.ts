import axios from 'axios';
import {GET_REQUEST} from '../helpers/consts';

export default class TestApi {
  apiAuthLogin(email: string, password: string) {
    return axios.post(GET_REQUEST.auth.login, {email, password});
  }

  apiAuthSignup(email: string, name:string, password: string) {
    return axios.post(GET_REQUEST.auth.signup, {email, name, password});
  }
}

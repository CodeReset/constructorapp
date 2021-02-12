import Api from '../../api/Api';
import {getToken, setToken} from '../../helpers/tokenHelper';
import {Screens} from '../../navigator/consts/ScreensName';
import navigationService from '../../navigator/navigationService';
import {
  LOADER_AUTHENTIFICATION,
  SELECT_TAB,
  LOADER_OFF_AUTHENTIFICATION,
} from '../actions/menuAction';

const authLogin = (email: string, password: string) => async (
  dispatch: any,
) => {
  dispatch({type: LOADER_AUTHENTIFICATION});
  try {
    const {data} = await Api.testingApi.apiAuthLogin(email, password);
    await setToken(data.token);
    Api.axiosToken(data.token);
    if (await getToken()) {
      navigationService.navigate(Screens.CONTACT_PROFILE_INFO);
    }
  } catch (e) {
    console.log(JSON.stringify(e));
  } finally {
    dispatch({type: LOADER_OFF_AUTHENTIFICATION});
  }
};

const authSignup = (email: string, name: string, password: string) => async (
  dispatch: any,
) => {
  dispatch({type: LOADER_AUTHENTIFICATION});
  try {
    const res = await Api.testingApi.apiAuthSignup(email, name, password);
    console.log('DATA', res);
    dispatch({type: SELECT_TAB, payload: 0});
  } catch (e) {
    console.log(JSON.stringify(e));
  } finally {
    dispatch({type: LOADER_OFF_AUTHENTIFICATION});
  }
};

export {authLogin, authSignup};

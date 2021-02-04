import Api from '../../api/Api';
import { getToken, setToken } from '../../helpers/tokenHelper';
import { Screens } from '../../navigator/consts/ScreensName';
import navigationService from '../../navigator/navigationService';

const authLogin = (email: string, password: string) => async (
  dispatch: any,
) => {
  try {
    const {data} = await Api.testingApi.apiAuthLogin(email, password);
    await setToken(data.token)
    if( await getToken()){
      navigationService.navigate(Screens.CONTACT_PROFILE_INFO)
    }

  } catch (e) {
    console.log(JSON.stringify(e));
  }
};


const authSignup = (email: string, name:string, password: string) => async (
  dispatch: any,
) => {
  try {
    const res = await Api.testingApi.apiAuthSignup(email, name, password);
    console.log('DATA', res);
  } catch (e) {
    console.log(JSON.stringify(e));
  }
};

export {authLogin, authSignup};

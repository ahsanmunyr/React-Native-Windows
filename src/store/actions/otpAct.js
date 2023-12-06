import {OTP_TYPE} from './types';
import POSSystem from '../../config/Rivake';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const otpAct = (code, token) => async dispatch => {
  try {
    // console.log(code.toString(), token)
    const response = await POSSystem.post('/api/ODPOSAPI/VerifyPin', {
      PosKey: code,
      Token: token,
    });
    if (response.data?.Status) {
      let userData = JSON.stringify(response.data);
      await AsyncStorage.setItem('userInfo', userData);
      dispatch({
        type: OTP_TYPE,
        payload: response.data,
      });
    }
    // console.log(response.data?.Status, '=================Status=============');
    return response.data;
  } catch (error) {
    console.log(error, '===========otpAct=============');
  }
};

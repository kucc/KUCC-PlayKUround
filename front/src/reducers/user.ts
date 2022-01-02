/* eslint-disable no-param-reassign */
import { Dispatch, SetStateAction } from 'react';

import produce from '@util/produce';

export const initialState = {
  loadMyInfoLoading: false, // 내 정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  me: null,
  signUpData: {},
  loginData: {},
};

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const loginRequestAction = (data: {
  email: Dispatch<SetStateAction<null>> | null;
  password: Dispatch<SetStateAction<null>> | null;
}) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
});

const reducer = (state = initialState, action: { type: any; data: any; error: any }) =>
  produce(
    state,
    (draft: {
      logInLoading: boolean;
      logInError: null;
      logInDone: boolean;
      me: null;
      logOutLoading: boolean;
      logOutError: null;
      logOutDone: boolean;
      signUpLoading: boolean;
      signUpError: null;
      signUpDone: boolean;
    }) => {
      switch (action.type) {
        case LOG_IN_REQUEST:
          draft.logInLoading = true;
          draft.logInError = null;
          draft.logInDone = false;
          break;
        case LOG_IN_SUCCESS:
          draft.logInLoading = false;
          draft.me = action.data;
          draft.logInDone = true;
          break;
        case LOG_IN_FAILURE:
          draft.logInLoading = false;
          draft.logInError = action.error;
          break;
        case LOG_OUT_REQUEST:
          draft.logOutLoading = true;
          draft.logOutError = null;
          draft.logOutDone = false;
          break;
        case LOG_OUT_SUCCESS:
          draft.logOutLoading = false;
          draft.logOutDone = true;
          draft.me = null;
          break;
        case LOG_OUT_FAILURE:
          draft.logOutLoading = false;
          draft.logOutError = action.error;
          break;
        case SIGN_UP_REQUEST:
          draft.signUpLoading = true;
          draft.signUpError = null;
          draft.signUpDone = false;
          break;
        case SIGN_UP_SUCCESS:
          draft.signUpLoading = false;
          draft.signUpDone = true;
          break;
        case SIGN_UP_FAILURE:
          draft.signUpLoading = false;
          draft.signUpError = action.error;
          break;
        default:
          break;
      }
    },
  );

export default reducer;

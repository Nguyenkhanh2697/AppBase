/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyleSheet } from 'react-native';
import { TIME_OUT, RESULT_CODE_PUSH_OUT } from '@config/api';
import { AppState } from '@app_redux/type';
import { select } from 'redux-saga/effects';
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { RootState } from '@store/allReducers';
import { onSetToken } from '@store/app_redux/reducer';
import { dispatch } from '@common';

import { ApiConstants } from './api';
import { handleResponseAxios, handleErrorAxios, _onPushLogout } from './helper';

const tokenKeyHeader = 'authorization';
let refreshTokenRequest: Promise<any> | null = null;
const AxiosInstance = Axios.create({});

AxiosInstance.interceptors.response.use(
  response => response,
  async function (error) {
    const originalRequest = error.config;
    if (
      error &&
      error.response &&
      (error.response.status === 403 || error.response.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      refreshTokenRequest = refreshTokenRequest
        ? refreshTokenRequest
        : refreshToken(originalRequest);
      const newToken = await refreshTokenRequest;
      refreshTokenRequest = null;
      if (newToken === null) {
        return Promise.reject(error);
      }
      dispatch(onSetToken(newToken));
      originalRequest.headers[tokenKeyHeader] = newToken;
      return AxiosInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);

// refresh token
async function refreshToken(originalRequest: any) {
  return AxiosInstance.get(ApiConstants.REFRESH_TOKEN, originalRequest)
    .then((res: AxiosResponse) => res.data.data)
    .catch(() => null);
}

// base
function* Request(config: AxiosRequestConfig, isCheckOut = true) {
  const { token, appUrl }: AppState = yield select((x: any) => x.app);
  const defaultConfig: AxiosRequestConfig = {
    // baseURL: appUrl,
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: TIME_OUT,
    // headers: {
    //   'Content-Type': 'application/json',
    //   [tokenKeyHeader]: token,
    // },
  };
  return yield AxiosInstance.request(
    StyleSheet.flatten([defaultConfig, config]),
  )
    .then((res: any) => {
      const result = handleResponseAxios(res);
      return result;
    })
    // .catch((error: AxiosError) => {
    //   const result = handleErrorAxios(error);
    //   if (!isCheckOut) {
    //     return result;
    //   }
    //   if (result.code === RESULT_CODE_PUSH_OUT && isCheckOut) {
    //     _onPushLogout();
    //     return null;
    //   } else {
    //     return result;
    //   }
    // });
}
// get
function* Get(url: string, param?: any) {
  return yield Request({ url: url, params: param, method: 'GET' });
}

// post
function* Post(url: string, data: any) {
  return yield Request({ url: url, data: data, method: 'POST' });
}

// post file
function* PostWithFile(url: string, data: any) {
  const { token }: AppState = yield select((x: RootState) => x.app);
  const header: any = { token: token, 'Content-Type': 'multipart/form-data' };
  return yield Request({ url: url, data: data, method: 'POST', headers: header });
}

// put
function* Put(url: string, data: any, params?: any) {
  return yield Request({ url: url, data: data, params: params, method: 'PUT' });
}

// delete
function* Delete(url: string, params?: any) {
  return yield Request({
    url: url,
    params: params,
    method: 'DELETE',
  });
}

export const ServiceSaga = {
  Get,
  Post,
  Put,
  Delete,
  PostWithFile,
  Request,
};

// export class RequestBuilder<T> {
//   url_: string;
//   params_: any;
//   config_: AxiosRequestConfig;

//   url(url: string) {
//     this.url_ = url;
//     return this;
//   }

//   params(params: any) {
//     this.params_ = params;
//     return this;
//   }

//   config(config: AxiosRequestConfig) {
//     this.config_ = config;
//     return this;
//   }

//   findAll(): Promise<AxiosResponse<T[]>> {
//     return ServiceSaga.Get(this.url_, this.params_) as Promise<AxiosResponse<T[]>>;
//   }
// }
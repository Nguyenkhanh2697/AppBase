import { all } from 'redux-saga/effects';

import { LoginSaga } from '../features/unAuthentication/login/saga/index';
import { GetListSearchSaga } from '../features/authentication/home/saga/index';

import { appSaga } from './app_saga/index';

export const rootSaga = function* rootSaga() {
  yield all([appSaga(), LoginSaga(), GetListSearchSaga()]);
};

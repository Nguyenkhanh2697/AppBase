import { combineReducers } from '@reduxjs/toolkit';

import { loginReducer } from '../features/unAuthentication/login/redux/reducer';
import { getListSearchReducer } from '../features/authentication/home/redux/reducer';

import { appReducer } from './app_redux/reducer';

export const allReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  getListSearch: getListSearchReducer,
});

export type RootState = ReturnType<typeof allReducer>;

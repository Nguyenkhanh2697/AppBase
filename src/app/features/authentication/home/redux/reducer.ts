/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@config/type';

import * as Action from './actionType';
import { Alert } from 'react-native';
export interface LoginState {
  loading: boolean;
  listSearch: Array<any>,
  page: any
}
const initialState: LoginState = {
  listSearch: [],
  loading: false,
  page: 0
};
const getListSearchSlice = createSlice({
  name: SLICE_NAME.GET_LIST_SEARCH,
  initialState: initialState,
  reducers: {
    reset: () => {
      return { ...initialState };
    },
    onStart: () => {
      /// TODO
      // loading: true
    },
    onSuccess: (state, action) => {
      if (action.payload.page === 1) {
        state.listSearch = action.payload.data
      } else {
        state.listSearch = action.payload.data.concat(action.payload.data)
      }

    },
    onLoadMoreSucceeded: (state, action) => {
      state.listSearch = state.listSearch.concat(action.payload)
    }
  },
});
const onGetListSearchAction = createAction(
  Action.GET_LIST_SEARCH,
  (
    url: string,
    body: any,
    onSucceeded: (data: Array<any>) => void,
    onFailure: (msg: string) => void,
  ) => ({
    payload: {
      url,
      body,
      onSucceeded,
      onFailure,
    },
  }),
);
export const actions = { ...getListSearchSlice.actions, onGetListSearchAction };
export const getListSearchReducer = getListSearchSlice.reducer;

import {takeLatest} from 'redux-saga/effects';

import {actions} from '../redux/reducer';

import * as Saga from './saga';
export function* GetListSearchSaga() {
  yield takeLatest(actions.onGetListSearchAction.type, Saga.onGetListSearch);
}

import { ServiceSaga } from '@networking';
import { Action } from 'redux';
import { call, put } from 'redux-saga/effects';
import { onCheckType } from '@common';

import { actions } from '../redux/reducer';

export function* onGetListSearch(action: Action) {
  if (actions.onGetListSearchAction.match(action)) {
    const { body, onFailure, onSucceeded, url } = action.payload;
    yield put(actions.onStart());
    const response = yield ServiceSaga.Get(url, body);
    if (response) {
      if (response.data) {
        if (onCheckType(onSucceeded, 'function')) {
          yield call(onSucceeded, response.data);
        }
      } else {
        if (onCheckType(onFailure, 'function')) {
          yield call(onFailure, response.msg ?? '');
        }
      }
    }
  }
}
// import { ServiceSaga } from '@networking';
// import { Action } from 'redux';
// import { call, put } from 'redux-saga/effects';
// import { onCheckType } from '@common';

// import { actions } from '../redux/reducer';

// export function* onGetListSearch(action: Action) {
//   if (actions.onGetListSearchAction.match(action)) {
//     const { onFailure, onSucceeded } = action.payload;
//     yield put(actions.onStart());
//     const response = yield action.payload.getListFn();
//     if (response) {
//       if (response.data) {
//         yield put(actions.onSuccess(response.data));
//         if (onCheckType(onSucceeded, 'function')) {
//           yield call(onSucceeded, response.data);
//         }
//       } else {
//         if (onCheckType(onFailure, 'function')) {
//           yield call(onFailure, response.msg ?? '');
//         }
//       }
//     }
//   }
// }

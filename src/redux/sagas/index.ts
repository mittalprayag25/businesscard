import {all, fork} from 'redux-saga/effects';

import {watchBusinessCardSaga} from './businessCardSaga';

export default function* root() {
  yield all([fork(watchBusinessCardSaga)]);
}

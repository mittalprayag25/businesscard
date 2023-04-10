import {
  put,
  takeLatest,
  select
} from 'redux-saga/effects';

import actions from '../../actions';

function* addCard({ payload }): any {
  const a = yield select(state => state);
  console.log('a', a);
  const { savedCards } = yield select(state => state.businessCards);
  savedCards.push(payload);
  yield put(actions.businessList.updateList(savedCards));
}

function* deleteCard(index): any {
  const { savedCards } = yield select(state => state.businessCards);
  savedCards.splice(index, 1);
  yield put(actions.businessList.updateList(savedCards));
}

export function* watchBusinessCardSaga() {
  yield takeLatest(actions.businessList.add, addCard);
  yield takeLatest(actions.businessList.delete, deleteCard);
}

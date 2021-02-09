import {takeEvery, all} from 'redux-saga/effects';
import {getFollowers, getUsers} from './constants';
import {getFolLowersData, getUsersData} from './sagas';

function* filmsWatcher() {
  yield takeEvery(getUsers, getUsersData);
}
function* followersWatcher() {
  yield takeEvery(getFollowers, getFolLowersData);
}

export default function* rootSagas() {
  yield all([filmsWatcher(), followersWatcher()]);
}

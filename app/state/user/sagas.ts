import {put, call, select} from 'redux-saga/effects';
import {
  getUsersDataStart,
  getUsersDataFailure,
  getUsersDataSuccess,
  getFollowersDataStart,
  getFollowersDataSuccess,
} from './actionCreators';
import {fetchFollowers, fetchUsers} from './api';
import {SagaIterator} from '@redux-saga/core';
import {Alert} from 'react-native';

export function* getUsersData(): SagaIterator {
  const {perPage} = yield select((state) => state.userState);
  try {
    yield put(getUsersDataStart());
    const searchResponse = yield call(fetchUsers, perPage);
    yield put(getUsersDataSuccess(searchResponse.data));
  } catch (error) {
    Alert.alert(error.message);
    yield put(getUsersDataFailure());
  }
}
export function* getFolLowersData(): SagaIterator {
  const {perPageFollowers, name} = yield select((state) => state.userState);
  try {
    yield put(getFollowersDataStart());
    const searchResponse = yield call(fetchFollowers, perPageFollowers, name);
    yield put(getFollowersDataSuccess(searchResponse.data));
  } catch (error) {
    Alert.alert(error.message);
    yield put(getUsersDataFailure());
  }
}

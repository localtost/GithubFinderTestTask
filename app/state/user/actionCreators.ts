import {
  getUsers,
  getUsersFailure,
  getUsersSuccess,
  getUsersStart,
  getFollowers,
  getFollowersFailure,
  getFollowersStart,
  getFollowersSuccess,
  clearFollowers,
} from './constants';
import {UserAction} from './type';

export const getUserData = (): UserAction => ({
  type: getUsers,
});
export const getUsersDataStart = (): UserAction => ({
  type: getUsersStart,
});
export const getUsersDataFailure = (): UserAction => ({
  type: getUsersFailure,
});
export const getUsersDataSuccess = (data: Array<unknown>): UserAction => ({
  type: getUsersSuccess,
  payload: data,
});

export const getFollowersData = (name: string): UserAction => ({
  type: getFollowers,
  payload: name,
});
export const getFollowersDataStart = (): UserAction => ({
  type: getFollowersStart,
});
export const GetFollowersDataFailure = (): UserAction => ({
  type: getFollowersFailure,
});
export const getFollowersDataSuccess = (data: Array<unknown>): UserAction => ({
  type: getFollowersSuccess,
  payload: data,
});
export const clearFollowersData = (): UserAction => ({
  type: clearFollowers,
});

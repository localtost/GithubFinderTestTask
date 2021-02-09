import {Action} from 'redux';
import {
  getUsers,
  getUsersFailure,
  getUsersSuccess,
  getUsersStart,
  clearFollowers,
} from './constants';

export interface State {
  loading: boolean;
  users: Array<unknown> | undefined;
  perPage: number;
  followers: Array<unknown> | undefined;
  name: unknown | string;
  perPageFollowers: number;
}

export interface GetUsersStart extends Action {
  type: typeof getUsersStart;
}
export interface GetUsers extends Action {
  type: typeof getUsers;
}
export interface GetUsersSuccess extends Action {
  type: typeof getUsersSuccess;
  payload?: Array<unknown>;
}
export interface GetUsersFailure extends Action {
  type: typeof getUsersFailure;
}

export interface GetFollowersStart extends Action {
  type: typeof getUsersStart;
}
export interface GetFollowers extends Action {
  type: typeof getUsers;
  payload: string;
}
export interface GetFollowersSuccess extends Action {
  type: typeof getUsersSuccess;
  payload?: Array<unknown>;
}
export interface GetFollowersFailure extends Action {
  type: typeof getUsersFailure;
}
export interface ClearFollowers extends Action {
  type: typeof clearFollowers;
}

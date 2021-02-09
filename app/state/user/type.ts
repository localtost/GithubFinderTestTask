import {
  GetUsers,
  GetUsersFailure,
  GetUsersStart,
  GetUsersSuccess,
  GetFollowers,
  GetFollowersFailure,
  GetFollowersStart,
  GetFollowersSuccess,
  ClearFollowers,
} from './interfaces';

export type UserAction =
  | ClearFollowers
  | GetFollowers
  | GetFollowersStart
  | GetFollowersSuccess
  | GetFollowersFailure
  | GetUsersStart
  | GetUsersSuccess
  | GetUsersFailure
  | GetUsers;

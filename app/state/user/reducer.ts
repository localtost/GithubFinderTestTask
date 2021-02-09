import {State} from './interfaces';
import {Reducer} from 'redux';
import {UserAction} from './type';
import {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  getFollowersStart,
  getFollowersSuccess,
  getFollowers,
  clearFollowers,
} from './constants';

const initialState: State = {
  loading: false,
  users: undefined,
  perPage: 15,
  perPageFollowers: 15,
  followers: undefined,
  name: '',
};

const filmsState: Reducer<State> = (
  state = initialState,
  action: UserAction,
): State => {
  switch (action.type) {
    case getUsersStart:
      return {...state, loading: true};
    case getUsersSuccess:
      return <State>{
        ...state,
        loading: false,
        users: 'payload' in action && action.payload,
        perPage: (state.perPage += 5),
      };
    case getUsersFailure:
      return {...state, loading: false};
    case getFollowersStart:
      return {...state, loading: true};
    case getFollowersSuccess:
      return <State>{
        ...state,
        loading: false,
        followers: 'payload' in action && action.payload,
        perPageFollowers: (state.perPageFollowers += 5),
      };
    case getUsersFailure:
      return {...state, loading: false};
    case getFollowers:
      return {...state, name: 'payload' in action && action.payload};
    case clearFollowers:
      return {...state, followers: undefined, name: '', perPageFollowers: 15};
    default:
      return state;
  }
};
export default filmsState;

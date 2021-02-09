import {combineReducers} from 'redux';
import userState from '../state/user/reducer';
export const rootReducer = combineReducers({
  userState,
});
export type RootState = ReturnType<typeof rootReducer>;

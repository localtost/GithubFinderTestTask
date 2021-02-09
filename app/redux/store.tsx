import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './rootReducer';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../state/user/watcher';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export default store;

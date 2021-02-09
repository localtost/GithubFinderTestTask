import {createSelectorHook} from 'react-redux';
import {RootState} from '../redux/rootReducer';
import {useDispatch as useRegularDispatch} from 'react-redux';
import {Action, AnyAction} from 'redux';

export interface VoidDispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): void;
}
export const useDispatch = <
  A extends Action = AnyAction
>(): VoidDispatch<A> => {
  const regularDispatch = useRegularDispatch();

  return (action: A) => {
    regularDispatch(action);
  };
};
export const useSelector = createSelectorHook<RootState>();

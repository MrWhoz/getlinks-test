// @flow
import type {Dispatch} from 'redux'
import type {Reducers} from 'reducers'
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;
export type GetState = () => State;

export type ThunkAction<T> = (dispatch: Dispatch<T>, getState: GetState) => any;
export type Action<T> = {
  type: string,
  payload: T,
  error?: boolean
};

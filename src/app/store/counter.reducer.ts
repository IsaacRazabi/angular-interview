import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './counter.actions';

export const initialState = 0;
//createReducer :  function responsible to changing state
// on : function to change state depending on action type - increment,decrement or reset
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
);

//here we defined the state and return the _counterReducer function 
//which return a new state
export function counterReducer(state:any, action:any) {
  return _counterReducer(state, action);
}


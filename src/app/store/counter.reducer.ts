import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { query, update, remove } from './counter.actions';
import { storageService } from '../services/state.service';
import { Items, Item } from '../app-state';

export const initialState: any = [];

const _counterReducer = createReducer(
  initialState,
  on(query, (state) => {
    let entities = storageService.query();
    state = entities;
    return { ...state };
  }),
  on(update, function (state, txt) {
    // const updateItem =  Object.values(state).filter((todo:any)=>{
    //   return todo.name !== txt.name
    // }
    const idx = Object.values(state).findIndex(
      (entity: any) => entity.name === txt.name
    );
    state[idx].name = txt.name;
    return { ...state };
  }),
  on(remove, (state, txt) => {
    const filteredState = Object.values(state).filter((todo: any) => {
      return todo.name !== txt.name;
    });
    state = filteredState;
    return { ...state };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

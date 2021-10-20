import { createAction, props } from '@ngrx/store';

export const update = createAction('[Counter Component] update',  props<{ name: string}>());
export const query = createAction('[Counter Component] query');
export const remove = createAction('remove',props<{ name: string}>());
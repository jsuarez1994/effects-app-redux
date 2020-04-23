import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  usuarios: reducers.UsersState;
  usuario: reducers.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.usersReducer,
    usuario: reducers.userReducer
}

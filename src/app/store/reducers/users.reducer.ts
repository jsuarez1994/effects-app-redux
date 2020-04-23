import { User } from '../../models/user.model';
import * as usersAction from '../actions';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

export function usersReducer(
  state = initState,
  action: usersAction.usuariosActions
): UsersState {
  switch (action.type) {
    case usersAction.CARGAR_USUARIOS:
      return {
        ...state,
        loading: true,
        error: null
      };

    case usersAction.CARGAR_USUARIOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.usuarios],
      };

    case usersAction.CARGAR_USUARIOS_FAILS:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        },
      };

    default:
      return state;
  }
}

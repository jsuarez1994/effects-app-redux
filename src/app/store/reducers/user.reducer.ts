import { User } from '../../models/user.model';
import * as userAction from '../actions';

export interface UserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: UserState = {
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

export function userReducer(
  state = initState,
  action: userAction.usuarioActions
): UserState {
  switch (action.type) {
    case userAction.CARGAR_USUARIO:
      return {
        ...state,
        loading: true,
        error: null
      };

    case userAction.CARGAR_USUARIO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.usuario,
      };

    case userAction.CARGAR_USUARIO_FAILS:
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

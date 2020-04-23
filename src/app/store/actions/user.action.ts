import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const CARGAR_USUARIO = '[USUARIO] CARGAR_USUARIO';
export const CARGAR_USUARIO_FAILS = '[USUARIO] CARGAR_USUARIO_FAILS';
export const CARGAR_USUARIO_SUCCESS = '[USUARIO] CARGAR_USUARIO_SUCCESS';

export class CargarUsuario implements Action {
  readonly type = CARGAR_USUARIO;
  constructor(public id: string){}
}

export class CargarUsuarioFail implements Action {
  readonly type = CARGAR_USUARIO_FAILS;
  constructor(public payload: any) {}
}

export class CargarUsuarioSuccess implements Action {
  readonly type = CARGAR_USUARIO_SUCCESS;
  constructor(public usuario: User) {}
}

export type usuarioActions =
  | CargarUsuario
  | CargarUsuarioFail
  | CargarUsuarioSuccess;

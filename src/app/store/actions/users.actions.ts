import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const CARGAR_USUARIOS = '[USUARIOS] CARGAR_USUARIOS';
export const CARGAR_USUARIOS_FAILS = '[USUARIOS] CARGAR_USUARIOS_FAILS';
export const CARGAR_USUARIOS_SUCCESS = '[USUARIOS] CARGAR_USUARIOS_SUCCESS';

export class CargarUsuarios implements Action {
  readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
  readonly type = CARGAR_USUARIOS_FAILS;
  constructor(public payload: any) {}
}

export class CargarUsuariosSuccess implements Action {
  readonly type = CARGAR_USUARIOS_SUCCESS;
  constructor(public usuarios: User[]) {}
}

export type usuariosActions =
  | CargarUsuarios
  | CargarUsuariosFail
  | CargarUsuariosSuccess;

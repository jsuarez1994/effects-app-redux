import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as userActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {
  constructor(private actions$: Actions, private userSerice: UsuarioService) {}

  @Effect()
  cargarUsuario$ = this.actions$.pipe(ofType(userActions.CARGAR_USUARIO)).pipe(
    switchMap((action: userActions.CargarUsuario) => {
      return this.userSerice.getUserById(action.id).pipe(
        map((user) => new userActions.CargarUsuarioSuccess(user)),
        catchError((error) => of(new userActions.CargarUsuarioFail(error)))
      );
    })
  );
}

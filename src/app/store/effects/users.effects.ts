import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as userActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {
  constructor(private actions$: Actions, private userSerice: UsuarioService) {}

  @Effect()
  cargarUsuarios$ = this.actions$
    .pipe(ofType(userActions.CARGAR_USUARIOS))
    .pipe(
      switchMap(() => {
        return this.userSerice.getUsers()
          .pipe(map( (users) => new userActions.CargarUsuariosSuccess(users) ),
          catchError( error => of(new userActions.CargarUsuariosFail(error)) )
          );
      })
    );
}

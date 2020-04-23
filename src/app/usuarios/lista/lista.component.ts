import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

import * as userActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  users: User[] = [];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {

    this.store.select('usuarios').subscribe(usuarios => {
      this.users = usuarios.users;
      this.loading = usuarios.loading;
      this.error = usuarios.error;
    })

    this.store.dispatch(new userActions.CargarUsuarios());
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarUsuario } from 'src/app/store/actions';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit {

  user: User;
  loading: boolean;
  error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.store.dispatch(new CargarUsuario(id));
    });

    this.store.select('usuario').subscribe( usuario => {
      this.user = usuario.user;
      this.loading = usuario.loading;
      this.error = usuario.error;
    })

  }
}

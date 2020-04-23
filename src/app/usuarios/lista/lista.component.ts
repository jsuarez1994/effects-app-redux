import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(users => {
      console.log(users);
      this.users = users;
    })
  }

}

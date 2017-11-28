import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Usuario } from '../../domain/usuario/usuario';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginProvider {
  private _usuarioLogado: Usuario; // nova propriedade, que guarda o usuário logado.
  constructor(private _http: Http) {}
  
  public efetuaLogin(email: string, senha: string) {
    let api = `https://aluracar.herokuapp.com/login?email=${email}&senha=${senha}`;

    return this._http
        .get(api)
        .map(res => res.json().usuario)
        .toPromise()
        .then(dado => {
            let usuario = new Usuario(dado.nome, dado.dataNascimento, dado.email, dado.telefone);
            this._usuarioLogado = usuario;
            return usuario;
        });
}
obtemUsuarioLogado() {
  return this._usuarioLogado;
}
}

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

/*
  Generated class for the PerfilPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage implements OnInit {
  ngOnInit(): void {
  }
  
    public url: string;
  
    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private _service: LoginProvider) {}
  
      get usuarioLogado() {
  
        return this._service.obtemUsuarioLogado();
      }
  }

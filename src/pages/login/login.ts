// src/pages/login/login.ts
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public email: string = 'joao@alura.com.br';
  public senha: string = 'alura123';

  constructor(public navCtrl: NavController, public navParams: NavParams ,
    private _service: LoginProvider, 
    private _alertCtrl: AlertController) {}

  efetuaLogin() {

    this._service
    .efetuaLogin(this.email, this.senha)
    .then(() => {
      this.navCtrl.setRoot(HomePage)
    })
    .catch(() => {
      this._alertCtrl.create({
        title: 'Problema no login',
        subTitle: 'Email ou senha inválidos. Verifique',
        buttons: [{ text: 'Ok'}]
      }).present();
    });

  }
}
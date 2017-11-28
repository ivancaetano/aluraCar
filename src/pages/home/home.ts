import { Component, OnInit } from '@angular/core';

// importando o novo componente!
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { EscolhaPage } from '../escolha/escolha';

import { Carro } from '../../domain/carro/carro';

import { CarroService } from '../../domain/carro/carro-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  public carros: Carro[];
  
    constructor(
      public navCtrl: NavController, 
      private _service: CarroService, 
      private _loadingCtrl: LoadingController,
      private _alertCtrl: AlertController) {}
  
    ngOnInit() {
  
     let loader = this._loadingCtrl.create({
        content: 'Buscando dados dos carros. Aguarde ...'
      });
  
      loader.present();
      this._service
      .lista()
      .then(carros => {
        this.carros = carros;
        loader.dismiss();
      })
      .catch(err => {
        console.log(err);
        loader.dismiss();
        this._alertCtrl
          .create({
            title: 'Falha na conexão',
            buttons: [{ text: 'Estou ciente!'}],
            subTitle: 'Não foi possível obter a lista de carros. Tente mais tarde.'
          }).present();
      });
      
    }
    seleciona(carro: Carro) {
      
      this.navCtrl.push(EscolhaPage,{carroSelecionado: carro});
        }

  }
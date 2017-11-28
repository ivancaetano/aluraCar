import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// importando a classe
import { Acessorio } from '../../domain/carro/acessorio';
import { Carro } from '../../domain/carro/carro';

import { CadastroPage } from '../cadastro/cadastro';
/*
  Generated class for the EscolhaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html'
})
export class EscolhaPage {
  
  public carro: Carro;
  public acessorios: Acessorio[];
      private _precoTotal: number;
  
      constructor(public navCtrl: NavController,public navParams: NavParams) {
  
          this.carro = navParams.get('carroSelecionado');
          this._precoTotal = this.carro.preco;
          this.acessorios = [
            new Acessorio('Freio ABS', 800),
            new Acessorio('Ar-condicionado', 1000),
            new Acessorio('MP3 Player', 500)
        ];
      }
  
      get precoTotal() {
          return this._precoTotal;
      }
  
      atualizaTotal(ligado: boolean, acessorio: Acessorio) {
  
          ligado ?
              this._precoTotal+= acessorio.preco :
              this._precoTotal-= acessorio.preco;
      }
  // novo método 
  avancaNoAgendamento() {
    
            this.navCtrl.push(CadastroPage, {
                carro: this.carro, 
                precoTotal: this._precoTotal
            });
        }  
  }

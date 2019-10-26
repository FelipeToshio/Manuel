import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-condicoes',
  templateUrl: './cadastro-condicoes.page.html',
  styleUrls: ['./cadastro-condicoes.page.scss'],
})
export class CadastroCondicoesPage implements OnInit {

  public htmlToAdd;

  constructor() { }

  ngOnInit() {
  }

  addTexto(){
    console.log(
      
    )
    this.htmlToAdd='<ion-input></ion-input>';
  }

}

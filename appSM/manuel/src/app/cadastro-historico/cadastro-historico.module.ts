import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroHistoricoPage } from './cadastro-historico.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroHistoricoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroHistoricoPage]
})
export class CadastroHistoricoPageModule {}

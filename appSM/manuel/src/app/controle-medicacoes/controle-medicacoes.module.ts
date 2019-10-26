import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ControleMedicacoesPage } from './controle-medicacoes.page';

const routes: Routes = [
  {
    path: '',
    component: ControleMedicacoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ControleMedicacoesPage]
})
export class ControleMedicacoesPageModule {}

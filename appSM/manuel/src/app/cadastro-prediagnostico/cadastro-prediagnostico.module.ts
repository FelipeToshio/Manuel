import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroPrediagnosticoPage } from './cadastro-prediagnostico.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPrediagnosticoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroPrediagnosticoPage]
})
export class CadastroPrediagnosticoPageModule {}

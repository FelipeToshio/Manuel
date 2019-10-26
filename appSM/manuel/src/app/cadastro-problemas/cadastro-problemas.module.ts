import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroProblemasPage } from './cadastro-problemas.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroProblemasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroProblemasPage]
})
export class CadastroProblemasPageModule {}

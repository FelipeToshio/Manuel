import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ControleRemedioPage } from './controle-remedio.page';

const routes: Routes = [
  {
    path: '',
    component: ControleRemedioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ControleRemedioPage]
})
export class ControleRemedioPageModule {}

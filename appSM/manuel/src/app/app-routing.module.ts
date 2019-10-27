import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'cadastro-condicoes', loadChildren: './cadastro-condicoes/cadastro-condicoes.module#CadastroCondicoesPageModule' },
  { path: 'cadastro-historico', loadChildren: './cadastro-historico/cadastro-historico.module#CadastroHistoricoPageModule' },
  { path: 'cadastro-problemas', loadChildren: './cadastro-problemas/cadastro-problemas.module#CadastroProblemasPageModule' },
  { path: 'cadastro-prediagnostico', loadChildren: './cadastro-prediagnostico/cadastro-prediagnostico.module#CadastroPrediagnosticoPageModule' },
  { path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },
  { path: 'controle-medicacoes', loadChildren: './controle-medicacoes/controle-medicacoes.module#ControleMedicacoesPageModule' },
  { path: 'controle-remedio', loadChildren: './controle-remedio/controle-remedio.module#ControleRemedioPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

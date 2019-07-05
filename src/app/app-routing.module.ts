import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { AprovacaoComponent } from './aprovacao/aprovacao.component';
import { RegistrosComponent } from './registros/registros.component';
import { ListaDeEsperaComponent } from './lista-de-espera/lista-de-espera.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'solicitacao', component: SolicitacaoComponent },
  { path: 'aprovacao/:id', component: AprovacaoComponent },
  { path: 'registros', component: RegistrosComponent },
  { path: 'lista-de-espera', component: ListaDeEsperaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

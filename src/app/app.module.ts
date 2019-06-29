import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { AprovacaoComponent } from './aprovacao/aprovacao.component';
import { RegistrosComponent } from './registros/registros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SolicitacaoComponent,
    AprovacaoComponent,
    RegistrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

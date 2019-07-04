import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { AprovacaoComponent } from './aprovacao/aprovacao.component';
import { RegistrosComponent } from './registros/registros.component';
import { LoginComponent } from './login/login.component';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SolicitacaoComponent,
    AprovacaoComponent,
    RegistrosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-lista-de-espera',
  templateUrl: './lista-de-espera.component.html',
  styleUrls: ['./lista-de-espera.component.css']
})
export class ListaDeEsperaComponent implements OnInit {

  Solicitacao: any = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.loadSolicitacoes()
  }

  loadSolicitacoes() {
    return this.dataService.getSolicitacoesEmEspera().subscribe((data: {}) => {
      this.Solicitacao = data;
    })
  }
}

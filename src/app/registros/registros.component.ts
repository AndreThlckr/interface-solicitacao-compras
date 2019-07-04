import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})

export class RegistrosComponent implements OnInit {

  Solicitacao: any = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.loadSolicitacoes()
  }

  loadSolicitacoes() {
    return this.dataService.getSolicitacoes().subscribe((data: {}) => {
      this.Solicitacao = data;
    })
  }
  
}

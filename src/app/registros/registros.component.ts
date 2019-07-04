import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})

export class RegistrosComponent implements OnInit {

  solicitacoes: Object;

  constructor(private solicitacao: DataService) { }

  ngOnInit() {
    this.solicitacao.getSolicitacoes().subscribe(solicitacao => {
      this.solicitacoes = solicitacao
      console.log(this.solicitacoes);
    }
    );
  }
}

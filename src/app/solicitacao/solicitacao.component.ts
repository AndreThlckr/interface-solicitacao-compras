import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {

  @Input() solicitacaoDetails = { nome: '', descricao: '', preco: 0 }

  constructor(
    public dataService: DataService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addSolicitacao(dataEmployee) {
    this.dataService.createSolicitacao(this.solicitacaoDetails).subscribe((data: {}) => {
      this.router.navigate([''])
    })
  }

}

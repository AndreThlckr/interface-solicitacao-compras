import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Solicitacao } from '../shared/models/solicitacao';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {

  form: FormGroup;
  formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public dataService: DataService,
    public router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      descricao: [null, [Validators.required, Validators.minLength(5)]],
      preco: [null, [Validators.required]],
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.formSubmitted = true;

    if (this.form.valid) {
      //copia os dados do formulário para 'result' e cria solicitacao
      const result: Solicitacao = Object.assign({}, this.form.value);
      this.dataService.createSolicitacao(result).subscribe((data: {}) => {
        this.router.navigate([''])
      })
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Solicitacao } from '../solicitacao';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {

  form: FormGroup;
  solicitacaoDetails: any;
  formSubmitted = false;



  //@Input() solicitacaoDetails = { nome: '', descricao: '', preco: 0 }

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
      nome: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
      preco: [null, [Validators.required]],
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.formSubmitted = true;

    if (this.form.valid) {
      const result: Solicitacao = Object.assign({}, this.form.value);
      this.dataService.createSolicitacao(result).subscribe((data: {}) => {
        this.router.navigate([''])
      })
    }
  }

  addSolicitacao() {
    this.dataService.createSolicitacao(this.solicitacaoDetails).subscribe((data: {}) => {
      this.router.navigate([''])
    })
  }

}

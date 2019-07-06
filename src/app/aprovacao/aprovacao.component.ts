import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Solicitacao } from '../shared/models/solicitacao';

@Component({
  selector: 'app-aprovacao',
  templateUrl: './aprovacao.component.html',
  styleUrls: ['./aprovacao.component.css']
})
export class AprovacaoComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  solicitacao: Solicitacao;
  form: FormGroup;
  formSubmitted = false;
  solicitacaoNegada = false;

  constructor(
    private formBuilder: FormBuilder,
    public dataService: DataService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.buildForm();
    this.setSituacaoValidators();
    this.loadSituacao();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      nome: [{
        value: null,
        disabled: true
      }],
      descricao: [{
        value: null,
        disabled: true
      }],
      preco: [{
        value: null,
        disabled: true
      }],
      situacao: [null, [Validators.required]],
      observacao: [{
        value: null,
        disabled: true
      }],
    });
  }

  setSituacaoValidators() {
    const observacaoControl = this.form.get('observacao');

    this.form.get('situacao').valueChanges
      .subscribe(situacao => {

        if (situacao === 'true') {
          observacaoControl.clearValidators();
          observacaoControl.setValue(null);
          observacaoControl.disable();
          this.solicitacaoNegada = false;
        }

        if (situacao === 'false') {
          observacaoControl.enable();
          observacaoControl.setValidators([Validators.required, Validators.minLength(5)]);
          this.solicitacaoNegada = true;
        }

        observacaoControl.updateValueAndValidity();
      });
  }

  loadSituacao() {
    this.dataService.getSolicitacao(this.id)
      .subscribe(data => {
        this.form.patchValue(data);
      });
  }

  onSubmit(event) {
    event.preventDefault();
    this.formSubmitted = true;
    console.log('submit');

    if (this.form.valid) {
      console.log('valido');
      //copia os dados do formulário para 'result' e cria solicitacao
      const result: Solicitacao = Object.assign({}, this.form.getRawValue());
      this.dataService.updateSolicitacao(this.id, result).subscribe((data: {}) => {
        this.router.navigate(['/lista-de-espera'])
      })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})

export class RegistrosComponent implements OnInit {

  Solicitacao: any = [];
  form: FormGroup;

  //parametros de pesquisa
  nomeParam: string = '';
  descricaoParam: string = '';
  situacaoParam: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public dataService: DataService,
    public actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.buildForm();
    this.getSearchParameters();
    this.updateFormData();
    this.loadSolicitacoes();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      nome: [],
      descricao: [],
      situacao: []
    });
  }

  getSearchParameters() {
    this.actRoute.queryParamMap.subscribe(queryParams => {
      this.nomeParam = queryParams.get("nome");
      this.descricaoParam = queryParams.get("descricao");
      this.situacaoParam = queryParams.get("situacao");
    });
  }

  updateFormData() {
    this.form.setValue({
      nome: this.nomeParam,
      descricao: this.descricaoParam,
      situacao: this.situacaoParam
    });
  }

  loadSolicitacoes() {
    return this.dataService.getSolicitacoes(this.nomeParam, this.descricaoParam, this.situacaoParam).subscribe((data: {}) => {
      this.Solicitacao = data;
    })
  }

  btnClick() {
    this.router.navigateByUrl('/registros?nome=' + this.form.controls['nome'].value
      + '&descricao=' + this.form.controls['descricao'].value
      + '&situacao=' + this.form.controls['situacao'].value);
  }

}

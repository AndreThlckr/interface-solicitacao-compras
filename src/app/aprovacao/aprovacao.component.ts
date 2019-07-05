import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aprovacao',
  templateUrl: './aprovacao.component.html',
  styleUrls: ['./aprovacao.component.css']
})
export class AprovacaoComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  solicitacaoData: any = {};

  constructor(
    public dataService: DataService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.dataService.getSolicitacao(this.id).subscribe((data: {}) => {
      this.solicitacaoData = data;
    })
  }

  updateSolicitacao() {
      this.dataService.updateSolicitacao(this.id, this.solicitacaoData).subscribe(data => {
        this.router.navigate(['/lista-de-espera'])
      })
    
  }

}

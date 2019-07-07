import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  usuario: string;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      usuario: ['solicitante']
    });
  }

  redirect() {
    this.usuario = (this.form.controls['usuario'].value);

    if (this.usuario == 'solicitante') {
      this.router.navigate(['/solicitacao']);
    } else if (this.usuario == 'almoxarife') {
      this.router.navigate(['/lista-de-espera']);
    } else if (this.usuario == 'administrador') {
      this.router.navigate(['/registros']);
    }

  }
}



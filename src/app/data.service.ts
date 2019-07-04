import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Solicitacao } from './solicitacao';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiURL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getSolicitacoes(): Observable<Solicitacao> {
    return this.http.get<Solicitacao>(this.apiURL + '/solicitacoes/busca')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getSolicitacao(id): Observable<Solicitacao> {
    return this.http.get<Solicitacao>(this.apiURL + '/solicitacoes/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  createSolicitacao(solicitacao): Observable<Solicitacao> {
    return this.http.post<Solicitacao>(this.apiURL + '/solicitacoes', JSON.stringify(solicitacao), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  updateSolicitacao(id, solicitacao): Observable<Solicitacao> {
    return this.http.put<Solicitacao>(this.apiURL + '/solicitacoes/' + id, JSON.stringify(solicitacao), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Erros client-side
       errorMessage = error.error.message;
     } else {
       // Erros server-side
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}

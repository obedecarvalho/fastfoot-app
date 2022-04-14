import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classificacao } from '../model/classificacao.model';

@Injectable({
  providedIn: 'root'
})
export class ClassificacaoService {

  apiUrl = 'http://localhost:8081/classificacao/campeonato/';
  param = '?nivel=';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getClassificacaoPorCampeonato(idCampeonato: number, tipoCampeonato: string): Observable<Classificacao[]> {
    return this.httpClient.get<Classificacao[]>(this.apiUrl + idCampeonato + this.param + tipoCampeonato);
  }
}

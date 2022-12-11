import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { ClassificacaoProbabilidade } from '../model/classificacao-probabilidade.model';
import { Classificacao } from '../model/classificacao.model';

@Injectable({
  providedIn: 'root'
})
export class ClassificacaoService {

  /*apiUrl = 'http://localhost:8081/classificacao/campeonato/';
  param = '?nivel=';*/

  apiUrlProbabilidade = 'http://localhost:8081/probabilidade/campeonato/';

  apiUrl = AppSettings.API_ENDPOINT + 'classificacoes';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getByIdCampeonato(idCampeonato: number): Observable<Classificacao[]> {
    return this.httpClient.get<Classificacao[]>(this.apiUrl + '?idCampeonato=' + idCampeonato);
  }

  //Deprecated
  /*public getClassificacaoPorCampeonato(idCampeonato: number, tipoCampeonato: string): Observable<Classificacao[]> {
    return this.httpClient.get<Classificacao[]>(this.apiUrl + idCampeonato + this.param + tipoCampeonato);
  }*/

  //TODO: Colocar em service específico
  public getClassificacaoPorCampeonatoComProbabilidade(idCampeonato: number): Observable<ClassificacaoProbabilidade[]> {
    return this.httpClient.get<ClassificacaoProbabilidade[]>(this.apiUrlProbabilidade + idCampeonato);
  }
}

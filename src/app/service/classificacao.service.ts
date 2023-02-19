import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { Classificacao } from '../model/classificacao.model';

@Injectable({
  providedIn: 'root'
})
export class ClassificacaoService {

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

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partida } from '../model/partida.model';
import { Semana } from '../model/semana.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../model/app-settings.model';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  apiUrlJogarPartidas = 'http://localhost:8081/proximaSemana/';

  apiUrl = AppSettings.API_ENDPOINT + 'partidasJogavel';

  constructor(private httpClient: HttpClient) { }

  public getByIdCampeonato(idCampeonato: number): Observable<Partida[]> {
    return this.httpClient.get<Partida[]>(this.apiUrl + '/campeonato/' + idCampeonato);
  }

  public getByIdClube(idClube: number): Observable<Partida[]> {
    return this.httpClient.get<Partida[]>(this.apiUrl + '/clube/' + idClube + '?temporadaAtual=true');
  }

  public getByNumeroSemana(numeroSemana: number): Observable<Partida[]> {
    return this.httpClient.get<Partida[]>(this.apiUrl + '/semana/' + numeroSemana);
  }

  public jogarPartidas(): Observable<Semana> {
    return this.httpClient.get<Semana>(this.apiUrlJogarPartidas);
  }
}

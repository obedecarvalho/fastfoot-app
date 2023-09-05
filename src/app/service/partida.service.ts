import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partida } from '../model/partida.model';
import { Semana } from '../model/semana.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../model/app-settings.model';
import { Jogo } from '../model/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  apiUrlJogarPartidas = AppSettings.API_ENDPOINT + 'jogarPartidasSemana';

  apiUrl = AppSettings.API_ENDPOINT + 'partidasJogavel';

  constructor(private httpClient: HttpClient) { }

  public getByIdCampeonato(idCampeonato: number): Observable<Partida[]> {
    return this.httpClient.get<Partida[]>(this.apiUrl + '/campeonato/' + idCampeonato);
  }

  public getByIdClube(idClube: number): Observable<Partida[]> {
    return this.httpClient.get<Partida[]>(this.apiUrl + '/clube/' + idClube + '?temporadaAtual=true');
  }

  public getByNumeroSemana(numeroSemana: number, jogo?: Jogo): Observable<Partida[]> {
    return this.httpClient.get<Partida[]>(this.apiUrl + '/semana/' + numeroSemana + '?idJogo=' + AppSettings.DEFAULT_ID_JOGO);
  }

  public jogarPartidas(jogo?: Jogo): Observable<Semana> {
    return this.httpClient.get<Semana>(this.apiUrlJogarPartidas + '/' + AppSettings.DEFAULT_ID_JOGO);
  }
}

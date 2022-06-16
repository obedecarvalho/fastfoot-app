import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partida } from '../model/partida.model';
import { Semana } from '../model/semana.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  apiUrlCampeonato = 'http://localhost:8081/partidas/campeonato/';
  apiUrlClube = 'http://localhost:8081/partidas/clube/';
  apiUrlSemana = 'http://localhost:8081/partidas/semana/';
  apiUrlJogarPartidas = 'http://localhost:8081/proximaSemana/';
  apiUrlSemanaAmistosas = 'http://localhost:8081/partidas/amistosas/';
  param = '?nivel=';

  constructor(private httpClient: HttpClient) { }

  public getPartidasPorCampeonato(idCampeonato: number, tipoCampeonato: string): Observable<Partida[]> {
    return this.httpClient.get<Partida[]>(this.apiUrlCampeonato + idCampeonato + this.param + tipoCampeonato);
  }
  
  public getPartidasPorClube(idClube: number): Observable<Partida[]> {
    return this.httpClient.get<Partida[]>(this.apiUrlClube + idClube);
  }

  public getPartidasPorSemana(numSemana: number): Observable<Partida[]> {
    return this.httpClient.get<Partida[]>(this.apiUrlSemana + numSemana);
  }

  public getPartidasAmistosasPorSemana(numSemana: number): Observable<Partida[]> {
    return this.httpClient.get<Partida[]>(this.apiUrlSemanaAmistosas + numSemana);
  }

  public jogarPartidas(): Observable<Semana> {
    return this.httpClient.get<Semana>(this.apiUrlJogarPartidas);
  }
}

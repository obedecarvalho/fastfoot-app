import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temporada } from 'src/app/model/temporada.model';
import { Campeonato } from 'src/app/model/campeonato.model';

@Injectable({
  providedIn: 'root'
})
export class TemporadaService {

  apiUrlNovaTemporada = 'http://localhost:8081/novaTemporada';
  //apiUrlCampeonatosTemporadaAtual = 'http://localhost:8081/campeonatosTemporadaAtual/';
  //apiUrlTemporadas = 'http://localhost:8081/temporadas/';

  constructor(private httpClient: HttpClient) { }

  public novaTemporada() : Observable<Temporada> {
    return this.httpClient.get<Temporada>(this.apiUrlNovaTemporada);
  }

  /*public getCampeonatosTemporadaAtual(nivelLiga: string) : Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(this.apiUrlCampeonatosTemporadaAtual + '?nivel=' + nivelLiga);
  }*/

  /*public getTemporadas() : Observable<Temporada[]> {
    return this.httpClient.get<Temporada[]>(this.apiUrlTemporadas);
  }*/
}

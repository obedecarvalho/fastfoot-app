import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { Campeonato } from '../model/campeonato.model';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  apiUrl = AppSettings.API_ENDPOINT + 'campeonatosJogavel/';

  constructor(private httpClient: HttpClient) { }

  public getByTemporadaAtual(): Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(this.apiUrl + 'temporadaAtual');
  }

  public getNacionalByTemporadaAtual(): Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(this.apiUrl + 'temporadaAtual/nacional');
  }

  public getCopaNacionalByTemporadaAtual(): Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(this.apiUrl + 'temporadaAtual/copaNacional');
  }

  public getContinentalByTemporadaAtual(): Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(this.apiUrl + 'temporadaAtual/continental');
  }
}

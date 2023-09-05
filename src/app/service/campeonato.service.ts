import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { Campeonato } from '../model/campeonato.model';
import { Jogo } from '../model/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  apiUrl = AppSettings.API_ENDPOINT + 'campeonatosJogavel/';

  constructor(private httpClient: HttpClient) { }

  public getByTemporadaAtual(jogo?: Jogo): Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(this.apiUrl + 'temporadaAtual' + '?idJogo=' + AppSettings.DEFAULT_ID_JOGO);
  }

  public getNacionalByTemporadaAtual(jogo?: Jogo): Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(this.apiUrl + 'temporadaAtual/nacional' + '?idJogo=' + AppSettings.DEFAULT_ID_JOGO);
  }

  public getCopaNacionalByTemporadaAtual(jogo?: Jogo): Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(this.apiUrl + 'temporadaAtual/copaNacional' + '?idJogo=' + AppSettings.DEFAULT_ID_JOGO);
  }

  public getContinentalByTemporadaAtual(jogo?: Jogo): Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(this.apiUrl + 'temporadaAtual/continental' + '?idJogo=' + AppSettings.DEFAULT_ID_JOGO);
  }
}

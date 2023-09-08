import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { Campeonato } from '../model/campeonato.model';
import { Jogo } from '../model/jogo.model';
import { JogoService } from './jogo.service';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  apiUrl = AppSettings.API_ENDPOINT + 'campeonatosJogavel/';

  constructor(private httpClient: HttpClient, private jogoService: JogoService) { }

  public getByTemporadaAtual(jogo?: Jogo): Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(this.apiUrl + 'temporadaAtual' + '?idJogo=' + this.jogoService.jogoSelected.id);
  }

  public getNacionalByTemporadaAtual(jogo?: Jogo): Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(this.apiUrl + 'temporadaAtual/nacional' + '?idJogo=' + this.jogoService.jogoSelected.id);
  }

  public getCopaNacionalByTemporadaAtual(jogo?: Jogo): Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(this.apiUrl + 'temporadaAtual/copaNacional' + '?idJogo=' + this.jogoService.jogoSelected.id);
  }

  public getContinentalByTemporadaAtual(jogo?: Jogo): Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(this.apiUrl + 'temporadaAtual/continental' + '?idJogo=' + this.jogoService.jogoSelected.id);
  }
}

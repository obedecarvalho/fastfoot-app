import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from '../model/jogador.model';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../model/app-settings.model';
import { Clube } from '../model/clube.model';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  //apiUrlJogadoresPorClube = 'http://localhost:8081/jogadoresPorClube/';

  apiUrl = AppSettings.API_ENDPOINT + 'jogadores'

  constructor(private httpClient: HttpClient) { }

  public getByClube(clube: Clube): Observable<Jogador[]> {
    return this.httpClient.get<Jogador[]>(this.apiUrl + '?idClube=' + clube.id);
  }

  //Deprecated
  /*public getJogadoresPorClube(idClube: number): Observable<Jogador[]> {
    return this.httpClient.get<Jogador[]>(this.apiUrlJogadoresPorClube + idClube);
  }*/
}

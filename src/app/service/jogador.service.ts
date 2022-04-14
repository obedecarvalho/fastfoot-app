import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from '../model/jogador.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  apiUrlJogadoresPorClube = 'http://localhost:8081/jogadoresPorClube/';

  constructor(private httpClient: HttpClient) { }

  public getJogadoresPorClube(idClube: number): Observable<Jogador[]> {
    return this.httpClient.get<Jogador[]>(this.apiUrlJogadoresPorClube + idClube);
  }
}

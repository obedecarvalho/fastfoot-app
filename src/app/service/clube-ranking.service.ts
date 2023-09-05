import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubeRanking } from '../model/clube-ranking.model';
import { Liga } from '../model/liga.model';
import { AppSettings } from '../model/app-settings.model';
import { Jogo } from '../model/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeRankingService {

  apiUrl = AppSettings.API_ENDPOINT + 'clubeRankings';

  constructor(private httpClient: HttpClient) { }

  public getByLiga(liga: Liga, jogo?: Jogo): Observable<ClubeRanking[]>{
    return this.getByLigaAndAno(liga, null);
  }

  public getByLigaAndAno(liga: Liga, ano: number, jogo?: Jogo): Observable<ClubeRanking[]>{
    if (ano == null){
      return this.httpClient.get<ClubeRanking[]>(this.apiUrl + '?liga=' + liga.id + '&idJogo=' + AppSettings.DEFAULT_ID_JOGO);
    } else {
      return this.httpClient.get<ClubeRanking[]>(this.apiUrl + '?liga=' + liga.id + '&ano=' + ano + '&idJogo=' + AppSettings.DEFAULT_ID_JOGO);
    }
  }

  public getByIdClube(idClube: number, jogo?: Jogo){
    return this.httpClient.get<ClubeRanking[]>(this.apiUrl + '?idClube=' + idClube + '&idJogo=' + AppSettings.DEFAULT_ID_JOGO);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubeRanking } from '../model/clube-ranking.model';
import { Liga } from '../model/liga.model';
import { AppSettings } from '../model/app-settings.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeRankingService {

  apiUrl = AppSettings.API_ENDPOINT + 'clubeRankings';

  constructor(private httpClient: HttpClient) { }

  public getByLiga(liga: Liga): Observable<ClubeRanking[]>{
    return this.getByLigaAndAno(liga, null);
  }

  public getByLigaAndAno(liga: Liga, ano: number): Observable<ClubeRanking[]>{
    if (ano == null){
      return this.httpClient.get<ClubeRanking[]>(this.apiUrl + '?liga=' + liga.id);
    } else {
      return this.httpClient.get<ClubeRanking[]>(this.apiUrl + '?liga=' + liga.id + '&ano=' + ano);
    }
  }

  public getByIdClube(idClube: number){
    return this.httpClient.get<ClubeRanking[]>(this.apiUrl + '?idClube=' + idClube);
  }

}

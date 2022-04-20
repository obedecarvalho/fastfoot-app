import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubeRanking } from '../model/clube-ranking.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeRankingService {

  apiUrlClubesRankings = 'http://localhost:8081/clubesRankings/'
  paramsClubesRankings = '?ano='

  constructor(private httpClient: HttpClient) { }

  public getClubesRankingLiga(liga: string): Observable<ClubeRanking[]>{
    console.log(this.apiUrlClubesRankings + liga);
    return this.httpClient.get<ClubeRanking[]>(this.apiUrlClubesRankings + liga);
  }

  public getClubesRankingLigaAno(liga: string, ano: number): Observable<ClubeRanking[]>{
    console.log(this.apiUrlClubesRankings + liga);
    return this.httpClient.get<ClubeRanking[]>(this.apiUrlClubesRankings + liga + this.paramsClubesRankings + ano);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubeRanking } from '../model/clube-ranking.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeRankingService {

  apiUrlClubesRankings = 'http://localhost:8081/clubesRankings/'

  constructor(private httpClient: HttpClient) { }

  public getClubesRanking(liga: string): Observable<ClubeRanking[]>{
    console.log(this.apiUrlClubesRankings + liga);
    return this.httpClient.get<ClubeRanking[]>(this.apiUrlClubesRankings + liga);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubeRanking } from '../model/clube-ranking.model';
import { ClubeTituloRanking } from '../model/clube-titulo-ranking.model';
import { ClubeTituloAno } from '../model/clube-titulo-ano.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeRankingService {

  apiUrlClubesRankings = 'http://localhost:8081/clubesRankings/';
  paramsClubesRankings = '?ano=';

  apiUrlAnoClubeRankingItens = 'http://localhost:8081/anoClubeRankingItens/';

  apiUrlClubesTitulosRankings = 'http://localhost:8081/clubesTitulosRankings/';

  apiUrlClubeTituloAno = 'http://localhost:8081/clubes/campeoes/';

  constructor(private httpClient: HttpClient) { }

  public getClubesRankingLiga(liga: string): Observable<ClubeRanking[]>{
    //console.log(this.apiUrlClubesRankings + liga);
    return this.httpClient.get<ClubeRanking[]>(this.apiUrlClubesRankings + liga);
  }

  public getClubesRankingLigaAno(liga: string, ano: number): Observable<ClubeRanking[]>{
    //console.log(this.apiUrlClubesRankings + liga);
    if (ano == null){
      return this.httpClient.get<ClubeRanking[]>(this.apiUrlClubesRankings + liga);
    } else {
      return this.httpClient.get<ClubeRanking[]>(this.apiUrlClubesRankings + liga + this.paramsClubesRankings + ano);
    }
  }

  public getAnoClubeRankingItens(): Observable<number[]>{
    //console.log(this.apiUrlAnoClubeRankingItens);
    return this.httpClient.get<number[]>(this.apiUrlAnoClubeRankingItens);
  }

  public getClubesTitulosRankingLiga(liga: string): Observable<ClubeTituloRanking[]>{
    //console.log(this.apiUrlClubesTitulosRankings + liga);
    return this.httpClient.get<ClubeTituloRanking[]>(this.apiUrlClubesTitulosRankings + liga);
  }

  public getClubeTituloAno(ano: number): Observable<ClubeTituloAno[]>{
    //console.log(this.apiUrlClubesTitulosRankings + liga);
    return this.httpClient.get<ClubeTituloAno[]>(this.apiUrlClubeTituloAno + ano);
  }
}

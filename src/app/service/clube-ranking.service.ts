import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubeRanking } from '../model/clube-ranking.model';
import { ClubeTituloRanking } from '../model/clube-titulo-ranking.model';
import { ClubeTituloAno } from '../model/clube-titulo-ano.model';
import { Liga } from '../model/liga.model';
import { AppSettings } from '../model/app-settings.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeRankingService {

  apiUrlAnoClubeRankingItens = 'http://localhost:8081/anoClubeRankingItens/';

  apiUrlClubesTitulosRankings = 'http://localhost:8081/clubesTitulosRankings/';

  apiUrlClubeTituloAno = 'http://localhost:8081/clubes/campeoes/';

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

  public getAnoClubeRankingItens(): Observable<number[]>{//TODO: criar service especifico
    return this.httpClient.get<number[]>(this.apiUrlAnoClubeRankingItens);
  }

  public getClubesTitulosRankingLiga(liga: string): Observable<ClubeTituloRanking[]>{//TODO: criar service especifico
    return this.httpClient.get<ClubeTituloRanking[]>(this.apiUrlClubesTitulosRankings + liga);
  }

  public getClubeTituloAno(ano: number): Observable<ClubeTituloAno[]>{//TODO: criar service especifico
    return this.httpClient.get<ClubeTituloAno[]>(this.apiUrlClubeTituloAno + ano);
  }
}

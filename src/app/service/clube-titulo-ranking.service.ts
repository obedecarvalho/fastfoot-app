import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { ClubeTituloRanking } from '../model/clube-titulo-ranking.model';
import { Jogo } from '../model/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeTituloRankingService {

  apiUrl = AppSettings.API_ENDPOINT + 'clubeTituloRanking';

  constructor(private httpClient: HttpClient) { }

  public getByLigaStr(ligaStr: string, jogo?: Jogo): Observable<ClubeTituloRanking[]> {
    return this.httpClient.get<ClubeTituloRanking[]>(this.apiUrl + '?ligaStr=' + ligaStr + '&idJogo=' + AppSettings.DEFAULT_ID_JOGO);
  }

  public getAll(jogo?: Jogo): Observable<ClubeTituloRanking[]> {
    return this.httpClient.get<ClubeTituloRanking[]>(this.apiUrl + '?idJogo=' + AppSettings.DEFAULT_ID_JOGO);
  }
}

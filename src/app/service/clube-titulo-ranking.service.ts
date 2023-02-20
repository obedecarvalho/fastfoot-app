import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { ClubeTituloRanking } from '../model/clube-titulo-ranking.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeTituloRankingService {

  apiUrl = AppSettings.API_ENDPOINT + 'clubeTituloRanking';

  constructor(private httpClient: HttpClient) { }

  public getByLigaStr(ligaStr: string): Observable<ClubeTituloRanking[]> {
    return this.httpClient.get<ClubeTituloRanking[]>(this.apiUrl + '?ligaStr=' + ligaStr);
  }

  public getAll(): Observable<ClubeTituloRanking[]> {
    return this.httpClient.get<ClubeTituloRanking[]>(this.apiUrl);
  }
}

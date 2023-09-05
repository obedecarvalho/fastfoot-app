import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { ClubeTituloAno } from '../model/clube-titulo-ano.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeTituloAnoServiceService {

  apiUrl = AppSettings.API_ENDPOINT + 'clubeCampeao/';

  constructor(private httpClient: HttpClient) { }

  public getByAno(ano: number): Observable<ClubeTituloAno[]> {
    return this.httpClient.get<ClubeTituloAno[]>(this.apiUrl + ano + '?idJogo=' + AppSettings.DEFAULT_ID_JOGO);
  }
}

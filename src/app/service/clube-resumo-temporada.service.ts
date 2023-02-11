import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { ClubeResumoTemporada } from '../model/clube-resumo-temporada.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeResumoTemporadaService {

  apiUrl = AppSettings.API_ENDPOINT + 'clubeResumoTemporada';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<ClubeResumoTemporada[]>{
    return this.httpClient.get<ClubeResumoTemporada[]>(this.apiUrl);
  }

  public getByIdClube(idClube:number): Observable<ClubeResumoTemporada[]>{
    return this.httpClient.get<ClubeResumoTemporada[]>(this.apiUrl + '?idClube=' + idClube);
  }

}

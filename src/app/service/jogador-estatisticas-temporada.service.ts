import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { JogadorEstatisticasTemporada } from '../model/jogador-estatisticas-temporada.model';

@Injectable({
  providedIn: 'root'
})
export class JogadorEstatisticasTemporadaService {

  apiUrl = AppSettings.API_ENDPOINT + 'jogadorEstatisticasTemporada';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<JogadorEstatisticasTemporada[]>{
    return this.httpClient.get<JogadorEstatisticasTemporada[]>(this.apiUrl);
  }

  public getByIdClube(idClube:number): Observable<JogadorEstatisticasTemporada[]>{
    return this.httpClient.get<JogadorEstatisticasTemporada[]>(this.apiUrl + '?idClube=' + idClube);
  }
}

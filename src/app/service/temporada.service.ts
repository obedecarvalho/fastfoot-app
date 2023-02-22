import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temporada } from 'src/app/model/temporada.model';
import { AppSettings } from '../model/app-settings.model';

@Injectable({
  providedIn: 'root'
})
export class TemporadaService {

  apiUrl = AppSettings.API_ENDPOINT + 'temporadas';
  apiUrlNovaTemporada = AppSettings.API_ENDPOINT + 'criarNovaTemporada';

  constructor(private httpClient: HttpClient) { }

  public novaTemporada() : Observable<Temporada> {
    return this.httpClient.get<Temporada>(this.apiUrlNovaTemporada);
  }

  public getAll() : Observable<Temporada[]> {
    return this.httpClient.get<Temporada[]>(this.apiUrl);
  }
}

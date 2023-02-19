import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clube } from '../model/clube.model';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { Liga } from '../model/liga.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeService {

  apiUrl = AppSettings.API_ENDPOINT + 'clubes';

  constructor(private httpClient: HttpClient) { }

  public getByLiga(liga: Liga): Observable<Clube[]>{
    return this.httpClient.get<Clube[]>(this.apiUrl + '?liga=' + liga.id);
  }

}

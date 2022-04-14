import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clube } from '../model/clube.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClubeService {

  apiUrlClubesPorLiga = 'http://localhost:8081/clubesPorLiga/';

  constructor(private httpClient: HttpClient) { }

  public getClubesPorLiga(liga: string): Observable<Clube[]>{
    return this.httpClient.get<Clube[]>(this.apiUrlClubesPorLiga + liga);
  }

}

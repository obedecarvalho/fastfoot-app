import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clube } from '../model/clube.model';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/appSettings.model';
import { Liga } from '../model/liga.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeService {

  //apiUrlClubesPorLiga = 'http://localhost:8081/clubesPorLiga/';//Deprecated

  apiUrlByLiga = AppSettings.API_ENDPOINT + 'clubes?liga=';


  constructor(private httpClient: HttpClient) { }

  /*public getClubesPorLiga(liga: string): Observable<Clube[]>{//Deprecated
    return this.httpClient.get<Clube[]>(this.apiUrlClubesPorLiga + liga);
  }*/


  public getByLiga(liga: Liga): Observable<Clube[]>{
    //console.log(this.apiUrlByLiga + liga);
    return this.httpClient.get<Clube[]>(this.apiUrlByLiga + liga.id);
  }

}

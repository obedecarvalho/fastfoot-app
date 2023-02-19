import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temporada } from 'src/app/model/temporada.model';

@Injectable({
  providedIn: 'root'
})
export class TemporadaService {

  apiUrlNovaTemporada = 'http://localhost:8081/novaTemporada';

  constructor(private httpClient: HttpClient) { }

  public novaTemporada() : Observable<Temporada> {
    return this.httpClient.get<Temporada>(this.apiUrlNovaTemporada);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppSettings } from '../model/app-settings.model';
import { Jogo } from '../model/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  apiUrl = AppSettings.API_ENDPOINT + 'jogos';

  jogoSelected: Jogo;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Jogo[]>{
    return this.httpClient.get<Jogo[]>(this.apiUrl);
  }
}

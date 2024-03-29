import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppSettings } from '../model/app-settings.model';
import { Artilharia } from '../model/artilharia.model';
import { Observable } from 'rxjs';
import { Jogo } from '../model/jogo.model';
import { JogoService } from './jogo.service';

@Injectable({
  providedIn: 'root'
})
export class ArtilhariaService {

  apiUrl = AppSettings.API_ENDPOINT + 'artilharia';

  constructor(
    private httpClient: HttpClient,
    private jogoService: JogoService
    ) { }

  public getByTemporadaAtual(jogo?: Jogo): Observable<Artilharia[]> {
    return this.httpClient.get<Artilharia[]>(this.apiUrl + '/temporadaAtual'+ '?idJogo=' + this.jogoService.jogoSelected.id);
  }
}

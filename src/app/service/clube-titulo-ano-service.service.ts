import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { ClubeTituloAno } from '../model/clube-titulo-ano.model';
import { JogoService } from './jogo.service';
import { Jogo } from '../model/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeTituloAnoServiceService {

  apiUrl = AppSettings.API_ENDPOINT + 'clubeCampeao/';

  constructor(private httpClient: HttpClient, private jogoService: JogoService) { }

  public getByAno(ano: number, jogo?: Jogo): Observable<ClubeTituloAno[]> {
    return this.httpClient.get<ClubeTituloAno[]>(this.apiUrl + ano + '?idJogo=' + this.jogoService.jogoSelected.id);
  }
}

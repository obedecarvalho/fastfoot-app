import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { Jogo } from '../model/jogo.model';
import { PropostaTransferenciaJogador } from '../model/proposta-transferencia-jogador.model';
import { JogoService } from './jogo.service';

@Injectable({
  providedIn: 'root'
})
export class PropostaTransferenciaJogadorService {

  apiUrl = AppSettings.API_ENDPOINT + 'propostaTransferenciaJogador';

  constructor(private httpClient: HttpClient, private jogoService: JogoService) { }

  public getAll(): Observable<PropostaTransferenciaJogador[]>{
    return this.httpClient.get<PropostaTransferenciaJogador[]>(this.apiUrl);
  }

  public getPropostaAceita(jogo?: Jogo): Observable<PropostaTransferenciaJogador[]>{
    return this.httpClient.get<PropostaTransferenciaJogador[]>(this.apiUrl + '?propostaAceita=true' + '&idJogo=' + this.jogoService.jogoSelected.id);
  }
}

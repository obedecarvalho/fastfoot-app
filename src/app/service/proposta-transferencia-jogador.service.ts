import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { PropostaTransferenciaJogador } from '../model/proposta-transferencia-jogador.model';

@Injectable({
  providedIn: 'root'
})
export class PropostaTransferenciaJogadorService {

  apiUrl = AppSettings.API_ENDPOINT + 'propostaTransferenciaJogador';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<PropostaTransferenciaJogador[]>{
    return this.httpClient.get<PropostaTransferenciaJogador[]>(this.apiUrl);
  }

  public getPropostaAceita(): Observable<PropostaTransferenciaJogador[]>{
    return this.httpClient.get<PropostaTransferenciaJogador[]>(this.apiUrl + '?propostaAceita=true');
  }
}

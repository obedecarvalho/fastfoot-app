import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EscalacaoClube } from '../model/escalacao-clube.model';
import { Clube } from '../model/clube.model';
import { AppSettings } from '../model/app-settings.model';
import { EscalacaoJogador } from '../model/escalacao-jogador.model';

@Injectable({
  providedIn: 'root'
})
export class EscalacaoService {

  apiUrl = AppSettings.API_ENDPOINT;

  apiUrlEscalacaoClube = 'http://localhost:8081/api/consultarEscalacaoClube/';

  constructor(private httpClient: HttpClient) { }

  public getEscalacaoClube(clube: Clube): Observable<EscalacaoClube>{
    return this.httpClient.get<EscalacaoClube>(this.apiUrlEscalacaoClube + clube.id);
  }

  public salvarEscalacaoClube(clube: Clube, escalacaoClube: EscalacaoClube){
    console.log('salvar1');
    return this.httpClient.post<EscalacaoClube>(this.apiUrlEscalacaoClube + clube.id, escalacaoClube);//TODO
  }

  public getByClube(clube: Clube): Observable<EscalacaoJogador[]> {
    return this.httpClient.get<EscalacaoJogador[]>(this.apiUrl + '/escalacaoJogadorPosicao?idClube=' + clube.id);
  }
}

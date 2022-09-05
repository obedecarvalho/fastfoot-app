import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EscalacaoClube } from '../model/escalacao-clube.model';
import { Clube } from '../model/clube.model';

@Injectable({
  providedIn: 'root'
})
export class EscalacaoService {

  apiUrlEscalacaoClube = 'http://localhost:8081/escalacaoClube/';

  apiUrlSalvarEscalacaoClube = 'http://localhost:8081/salvarEscalacaoClube/';

  constructor(private httpClient: HttpClient) { }

  public getEscalacaoClube(clube: Clube): Observable<EscalacaoClube>{
    return this.httpClient.get<EscalacaoClube>(this.apiUrlEscalacaoClube + clube.idClube);
  }

  public salvarEscalacaoClube(clube: Clube, escalacaoClube: EscalacaoClube){
    console.log('salvar1');
    return this.httpClient.post<EscalacaoClube>(this.apiUrlSalvarEscalacaoClube + clube.idClube, escalacaoClube);
  }
}

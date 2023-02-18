import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../model/app-settings.model';
import { ClassificacaoProbabilidade } from 'src/app/model/classificacao-probabilidade.model';

@Injectable({
  providedIn: 'root'
})
export class ClubeProbabilidadeService {

  apiUrl = AppSettings.API_ENDPOINT + 'clubesProbabilidade';

  constructor(private httpClient: HttpClient) { }

  public getByIdCampeonatoAndSemanaAtual(idCampeonato: number): Observable<ClassificacaoProbabilidade[]> {
    return this.httpClient.get<ClassificacaoProbabilidade[]>(this.apiUrl + '/semanaAtual?comClassificacao=true&idCampeonato=' + idCampeonato);
  }
}

import { Clube } from "./clube.model";
import { Temporada } from "./temporada.model";

export class ClubeResumoTemporada {
    clube: Clube;
    temporada: Temporada;
    nivelCampeonato:any;
    jogos: number;
    vitorias: number;
    empates: number;
    golsPro: number;
    golsContra: number;
    classificacaoNacional: any;
    classificacaoCopaNacional: any;
    classificacaoContinental: any;
}
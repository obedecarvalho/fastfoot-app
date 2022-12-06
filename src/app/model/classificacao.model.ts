import { Clube } from "./clube.model";
import { GrupoCampeonato } from "./grupo-campeonato.model";

export class Classificacao {
    //nomeClube: string;
    clube: Clube;
    nomeCampeonato: string;
    nivelCampeonato: string;
    posicao: number;
    pontos: number;
    vitorias: number;
    empates: number;
    derrotas: number;
    saldoGols: number;
    golsPro: number;
    golsContra: number;
    numJogos: number;
    numeroGrupoCampeonato: number;
    grupoCampeonato: GrupoCampeonato;
}
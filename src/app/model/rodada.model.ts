import { Campeonato } from "./campeonato.model";
import { Semana } from "./semana.model";

export class Rodada {
    numero: number;
    semana: Semana;
    campeonatoJogavel: Campeonato;
    nivelCampeonato: string;
    amistoso: boolean;
};
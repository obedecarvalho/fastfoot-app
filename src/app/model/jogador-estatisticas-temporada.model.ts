import { Clube } from "./clube.model";
import { Jogador } from "./jogador.model";
import { Temporada } from "./temporada.model";

export class JogadorEstatisticasTemporada {
    jogador:Jogador;
    temporada:Temporada;
    clube:Clube;
    amistoso:boolean;
    numeroJogos:number;
    numeroJogosTitular:number;
    numeroMinutosJogados:number;
    golsMarcados:number;
    assistencias:number;
    finalizacoesDefendidas:number;
    finalizacoesFora:number;
    golsSofridos:number;
    goleiroFinalizacoesDefendidas:number;
    numeroRodadaDisputaPenalt:number;
    golsDisputaPenalt:number;
    golsPerdidosDisputaPenalt:number;
    defesasDisputaPenalt:number;
    golsSofridosDisputaPenalt:number;
}
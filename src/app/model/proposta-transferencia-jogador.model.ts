import { Clube } from "./clube.model";
import { Jogador } from "./jogador.model";
import { Semana } from "./semana.model";
import { Temporada } from "./temporada.model";


export class PropostaTransferenciaJogador {
    clubeOrigem:Clube;
    clubeDestino:Clube;
    jogador:Jogador;
    temporada:Temporada;
    semanaTransferencia:Semana;
    valorTransferencia:number;
    propostaAceita:boolean;
}
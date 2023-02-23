import { Clube } from "./clube.model";
import { Jogador } from "./jogador.model";

export class EscalacaoJogador {
    jogador: Jogador;
    clube: Clube;
    escalacaoPosicao: string;

    escalacao: number;
    escalacaoDesc: string;
}

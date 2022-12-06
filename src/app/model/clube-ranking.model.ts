import { Clube } from "./clube.model";

export class ClubeRanking {
    //clubeNome: string;//Deprecated
	ano: number;
    classificacaoNacional: string;
    classificacaoCopaNacional: string;
    classificacaoContinental: string;
    posicaoGeral: number;
    posicaoInternacional: number;
    clube: Clube;
}
import { Classificacao } from "./classificacao.model";

export class Probabilidade {
    probabilidadeAcesso: number;
	probabilidadeCampeao: number;
	probabilidadeClassificacaoContinental: number;
	probabilidadeClassificacaoCopaNacional: number;
	probabilidadeRebaixamento: number;
	nomeClube: string;
    classificacao: Classificacao;
}
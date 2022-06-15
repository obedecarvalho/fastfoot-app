import { Classificacao } from "./classificacao.model";

export class ClassificacaoProbabilidade {
    probabilidadeAcesso: string;
	probabilidadeCampeao: string;
	//probabilidadeClassificacaoContinental: string;
	//probabilidadeClassificacaoCopaNacional: string;
	probabilidadeRebaixamento: string;
	probabilidadeClassificacaoCI: string;
	probabilidadeClassificacaoCII: string;
	probabilidadeClassificacaoCIII: string;
	probabilidadeClassificacaoCNI: string;
	nomeClube: string;
    classificacao: Classificacao;
}

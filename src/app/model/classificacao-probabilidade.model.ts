import { Classificacao } from "./classificacao.model";
import { Clube } from "./clube.model";

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
	//nomeClube: string;
	clube: Clube;
    classificacao: Classificacao;
}

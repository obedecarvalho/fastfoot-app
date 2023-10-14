import { Clube } from "./clube.model";
import { PartidaDisputaPenalties } from "./partida-disputa-penalties.model";
import { Rodada } from "./rodada.model";

export class Partida {
	clubeMandante: Clube;
	clubeVisitante: Clube;
	golsMandante: number;
	golsVisitante: number;
	rodada: Rodada;
	partidaJogada: boolean;
	nivelCampeonato: string;

    numeroRodada: number;
	numeroSemana: number;
	anoTemporada: number;
	numeroSemanaAtualTemporada: number;
	temporadaAtual: boolean;
	nomeClubeMandante: string;
	nomeClubeVisitante: string;	
	nomeCampeonato: string;	
	numeroGrupoCampeonato: number;	

	//golsMandantePenalts: number;
	//golsVisitantePenalts: number;

	partidaDisputaPenalties: PartidaDisputaPenalties;
}
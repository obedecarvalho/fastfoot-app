import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificacaoContinentalComponent } from './views/classificacao-continental/classificacao-continental.component';
import { ClassificacaoNacionalComponent } from './views/classificacao-nacional/classificacao-nacional.component';
import { ClubeRankingComponent } from './views/clube-ranking/clube-ranking.component';
import { ClubeTitulosRankingComponent } from './views/clube-titulos-ranking/clube-titulos-ranking.component';
import { ClubeTituloAnoComponent } from './views/clube-titulo-ano/clube-titulo-ano.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { JogadorComponent } from './views/jogador/jogador.component';
import { PartidasAmistosasComponent } from './views/partidas-amistosas/partidas-amistosas.component';
import { PartidasCampeonatoComponent } from './views/partidas-campeonato/partidas-campeonato.component';
import { PartidasClubeComponent } from './views/partidas-clube/partidas-clube.component';
import { PartidasSemanaComponent } from './views/partidas-semana/partidas-semana.component';
import { ProbabilidadesComponent } from './views/probabilidades/probabilidades.component';
import { EscalacaoComponent } from './views/escalacao/escalacao.component';
import { JogadorArtilheiroComponent } from './views/jogador-artilheiro/jogador-artilheiro.component';
import { JogadorEstatisticaComponent } from './views/jogador-estatistica/jogador-estatistica.component';
import { TransfereciaJogadorComponent } from './views/transferecia-jogador/transferecia-jogador.component';
import { ClubeResumoTemporadaComponent } from './views/clube-resumo-temporada/clube-resumo-temporada.component';

const routes: Routes = [
  /*{
    path: '',
    component: InicioComponent
  },*/
  {
    path: 'classificacao/nacional',
    component: ClassificacaoNacionalComponent
  },
  {
    path: 'classificacao/continental',
    component: ClassificacaoContinentalComponent
  },
  {
    path: 'partidasClube',
    component: PartidasClubeComponent
  },
  {
    path: 'partidasSemana',
    component: PartidasSemanaComponent
  },
  {
    path: 'partidasAmistosas',
    component: PartidasAmistosasComponent
  },
  {
    path: 'clubeRanking',
    component: ClubeRankingComponent
  },
  {
    path: 'clubeTituloRanking',
    component: ClubeTitulosRankingComponent
  },
  {
    path: 'clubeTituloAno',
    component: ClubeTituloAnoComponent
  },
  {
    path: 'jogadores',
    component: JogadorComponent
  },
  {
    path: 'escalarClube',
    component: EscalacaoComponent
  },
  {
    path: 'partidasCampeonato',
    component: PartidasCampeonatoComponent
  },
  {
    path: 'probabilidades/nacional',
    component: ProbabilidadesComponent
  },
  {
    path: 'jogadorArtilheiro',
    component: JogadorArtilheiroComponent
  },
  {
    path: 'jogadorEstatistica',
    component: JogadorEstatisticaComponent
  },
  {
    path: 'transferenciaJogador',
    component: TransfereciaJogadorComponent
  },
  {
    path: 'clubeResumoTemporada',
    component: ClubeResumoTemporadaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

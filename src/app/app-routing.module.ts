import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificacaoContinentalComponent } from './views/classificacao-continental/classificacao-continental.component';
import { ClassificacaoNacionalComponent } from './views/classificacao-nacional/classificacao-nacional.component';
import { ClubeRankingComponent } from './views/clube-ranking/clube-ranking.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { JogadorComponent } from './views/jogador/jogador.component';
import { PartidasCampeonatoComponent } from './views/partidas-campeonato/partidas-campeonato.component';
import { PartidasClubeComponent } from './views/partidas-clube/partidas-clube.component';
import { PartidasSemanaComponent } from './views/partidas-semana/partidas-semana.component';

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
    path: 'clubeRanking',
    component: ClubeRankingComponent
  },
  {
    path: 'jogadores',
    component: JogadorComponent
  },
  {
    path: 'partidasCampeonato',
    component: PartidasCampeonatoComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { InicioComponent } from './views/inicio/inicio.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { PartidasClubeComponent } from './views/partidas-clube/partidas-clube.component';
import { PartidasCampeonatoComponent } from './views/partidas-campeonato/partidas-campeonato.component';
import { PartidasSemanaComponent } from './views/partidas-semana/partidas-semana.component';
import {MatSelectModule} from '@angular/material/select';
import { ClassificacaoContinentalComponent } from './views/classificacao-continental/classificacao-continental.component';
import { ClassificacaoNacionalComponent } from './views/classificacao-nacional/classificacao-nacional.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ClubeRankingComponent } from './views/clube-ranking/clube-ranking.component';
import { JogadorComponent } from './views/jogador/jogador.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProbabilidadesComponent } from './views/probabilidades/probabilidades.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { PartidasAmistosasComponent } from './views/partidas-amistosas/partidas-amistosas.component';
import { ClubeTitulosRankingComponent } from './views/clube-titulos-ranking/clube-titulos-ranking.component';
import { ClubeTituloAnoComponent } from './views/clube-titulo-ano/clube-titulo-ano.component';
import { EscalacaoComponent } from './views/escalacao/escalacao.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TransfereciaJogadorComponent } from './views/transferecia-jogador/transferecia-jogador.component';
import { JogadorArtilheiroComponent } from './views/jogador-artilheiro/jogador-artilheiro.component';
import { JogadorEstatisticaComponent } from './views/jogador-estatistica/jogador-estatistica.component';
import { ClubeResumoTemporadaComponent } from './views/clube-resumo-temporada/clube-resumo-temporada.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PartidasClubeComponent,
    PartidasCampeonatoComponent,
    PartidasSemanaComponent,
    ClassificacaoContinentalComponent,
    ClassificacaoNacionalComponent,
    ClubeRankingComponent,
    JogadorComponent,
    ProbabilidadesComponent,
    PartidasAmistosasComponent,
    ClubeTitulosRankingComponent,
    ClubeTituloAnoComponent,
    EscalacaoComponent,
    TransfereciaJogadorComponent,
    JogadorArtilheiroComponent,
    JogadorEstatisticaComponent,
    ClubeResumoTemporadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatProgressBarModule,
    CdkAccordionModule,
    DragDropModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

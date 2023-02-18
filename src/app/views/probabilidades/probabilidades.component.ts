import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Campeonato } from 'src/app/model/campeonato.model';
import { ClassificacaoProbabilidade } from 'src/app/model/classificacao-probabilidade.model';
import { ClassificacaoService } from 'src/app/service/classificacao.service';
import { ClubeProbabilidadeService } from 'src/app/service/clube-probabilidade.service';
import { TemporadaService } from 'src/app/service/temporada.service';

@Component({
  selector: 'app-probabilidades',
  templateUrl: './probabilidades.component.html',
  styleUrls: ['./probabilidades.component.css']
})
export class ProbabilidadesComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['posicao', 'nomeClube', 'pontos', 'vitorias', 'saldoGols', 'probCampeao', 'probRebAce', 'probCont', 'probContII', 'probContIII', 'probCopNac'];

  classificacoesSource: MatTableDataSource<ClassificacaoProbabilidade>;

  campeonatosItens: Campeonato[];

  campeonatoSelected: Campeonato;

  constructor(
    private classificacaoService: ClassificacaoService,
    private temporadaService: TemporadaService,
    private clubeProbabilidadeService: ClubeProbabilidadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCampeonatos();
  }

  public getCampeonatos(){
    this.temporadaService.getCampeonatosTemporadaAtual('NACIONAL').subscribe(
      data => {
        this.campeonatosItens = data;
      }
    );
  }

  public campeonatoChangeAction(){
    /*this.classificacaoService.getClassificacaoPorCampeonatoComProbabilidade(this.campeonatoSelected.idCampeonato).subscribe(
      data => {
        this.classificacoesSource = new MatTableDataSource<ClassificacaoProbabilidade>(data);
        this.classificacoesSource.sort = this.sort;
      }
    )*/
    this.clubeProbabilidadeService.getByIdCampeonatoAndSemanaAtual(this.campeonatoSelected.idCampeonato).subscribe(
      data => {
        this.classificacoesSource = new MatTableDataSource<ClassificacaoProbabilidade>(data);
        this.classificacoesSource.sort = this.sort;
      }
    );
  }

}

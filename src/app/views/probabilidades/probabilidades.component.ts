import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Campeonato } from 'src/app/model/campeonato.model';
import { ClassificacaoProbabilidade } from 'src/app/model/classificacao-probabilidade.model';
import { CampeonatoService } from 'src/app/service/campeonato.service';
import { ClubeProbabilidadeService } from 'src/app/service/clube-probabilidade.service';
import { DefaultSortingDataAcessorUtils } from 'src/app/util/default-sorting-data-acessor.util';

@Component({
  selector: 'app-probabilidades',
  templateUrl: './probabilidades.component.html',
  styleUrls: ['./probabilidades.component.css']
})
export class ProbabilidadesComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['classificacao.posicao', 'clube.nome', 'classificacao.pontos', 'classificacao.vitorias', 'classificacao.saldoGols', 
                                    'probabilidadeCampeao', 'probRebAce', 'probabilidadeClassificacaoCI', 'probabilidadeClassificacaoCII', 'probabilidadeClassificacaoCIII', 'probabilidadeClassificacaoCNI'];

  classificacoesSource: MatTableDataSource<ClassificacaoProbabilidade>;

  campeonatosItens: Campeonato[];

  campeonatoSelected: Campeonato;

  constructor(
    private clubeProbabilidadeService: ClubeProbabilidadeService,
    private campeonatoService: CampeonatoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.campeonatoService.getNacionalByTemporadaAtual().subscribe(
      data => {
        this.campeonatosItens = data;
      }
    );
  }

  public campeonatoChangeAction(){
    this.clubeProbabilidadeService.getByIdCampeonatoAndSemanaAtual(this.campeonatoSelected.id).subscribe(
      data => {
        this.classificacoesSource = new MatTableDataSource<ClassificacaoProbabilidade>(data);
        this.classificacoesSource.sort = this.sort;
        this.classificacoesSource.sortingDataAccessor = DefaultSortingDataAcessorUtils.pathDataAccessor;
      }
    );
  }

}

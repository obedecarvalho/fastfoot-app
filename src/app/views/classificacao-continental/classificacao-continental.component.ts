import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Campeonato } from 'src/app/model/campeonato.model';
import { Classificacao } from 'src/app/model/classificacao.model';
import { ClassificacaoService } from 'src/app/service/classificacao.service';
import { TemporadaService } from 'src/app/service/temporada.service';

@Component({
  selector: 'app-classificacao-continental',
  templateUrl: './classificacao-continental.component.html',
  styleUrls: ['./classificacao-continental.component.css']
})
export class ClassificacaoContinentalComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['posicao', 'nomeClube', 'jogos', 'pontos', 'vitorias', 'empates', 'derrotas', 'saldoGols', 'golsPro', 'golsContra'];

  numeroGrupos: number[] = [1, 2, 3, 4];

  classificacoesSource: MatTableDataSource<Classificacao>;

  campeonatosItens: Campeonato[];

  campeonatoSelected: Campeonato;

  constructor(
    private classificacaoService: ClassificacaoService,
    private temporadaService: TemporadaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCampeonatos();
  }

  public getCampeonatos(){
    this.temporadaService.getCampeonatosTemporadaAtual('CONTINENTAL').subscribe(
      data => {
        this.campeonatosItens = data;
      }
    );
  }

  public campeonatoChangeAction(){
    this.classificacaoService.getClassificacaoPorCampeonato(this.campeonatoSelected.idCampeonato, 'CONTINENTAL').subscribe(
      data => {
        this.classificacoesSource = new MatTableDataSource<Classificacao>(data);
        this.classificacoesSource.sort = this.sort;
      }
    )
  }
}

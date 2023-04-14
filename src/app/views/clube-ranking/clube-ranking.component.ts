import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClubeRanking } from 'src/app/model/clube-ranking.model';
import { Clube } from 'src/app/model/clube.model';
import { Liga, ligas } from 'src/app/model/liga.model';
import { Temporada } from 'src/app/model/temporada.model';
import { ClubeRankingService } from 'src/app/service/clube-ranking.service';
import { ClubeService } from 'src/app/service/clube.service';
import { TemporadaService } from 'src/app/service/temporada.service';
import { DefaultSortingDataAcessorUtils } from 'src/app/util/default-sorting-data-acessor.util';

@Component({
  selector: 'app-clube-ranking',
  templateUrl: './clube-ranking.component.html',
  styleUrls: ['./clube-ranking.component.css']
})
export class ClubeRankingComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  ligasItens: Liga[] = ligas;

  displayedColumns: string[];

  clubeRankingDataSource: MatTableDataSource<ClubeRanking>;

  ligaSelected: Liga;

  clubeSelected: Clube;

  clubesItens: Clube[];

  temporadaItens: Temporada[];

  temporadaSelected: Temporada;

  constructor(
    private clubeRankingService: ClubeRankingService,
    private clubeService: ClubeService,
    private temporadaService: TemporadaService
  ) { }

  ngOnInit(): void {
    this.getAnoClubeRankingItens();
  }

  public getAnoClubeRankingItens(){
    this.temporadaService.getAll().subscribe(
      data => {
        this.temporadaItens = data;
      }
    );
  }

  public clearChangeAction(){
    this.clubeRankingDataSource = null;
  }

  //TODO: validar dados
  public btSearchAction(){
    console.log('ligaChangeAction#');
    this.clubeRankingService.getByLigaAndAno(this.ligaSelected, this.temporadaSelected.ano).subscribe(
      data => {
        this.clubeRankingDataSource = new MatTableDataSource(data);
        this.clubeRankingDataSource.sort = this.sort;
        this.clubeRankingDataSource.sortingDataAccessor = DefaultSortingDataAcessorUtils.pathDataAccessor;
      }
    )
    this.displayedColumns = ['clube.nome', 'posicaoGeral', 'classificacaoContinental', 'classificacaoNacional', 'classificacaoCopaNacional'];
  }

  //TODO: validar dados
  public clubeChangeAction(){
    console.log('ligaChangeAction#2');
    this.clubeRankingService.getByIdClube(this.clubeSelected.id).subscribe(
      data => {
        this.clubeRankingDataSource = new MatTableDataSource(data);
        this.clubeRankingDataSource.sort = this.sort;
        this.clubeRankingDataSource.sortingDataAccessor = DefaultSortingDataAcessorUtils.pathDataAccessor;
      }
    )
    this.displayedColumns = ['clube.nome', 'ano', 'posicaoGeral', 'classificacaoContinental', 'classificacaoNacional', 'classificacaoCopaNacional'];
  }

  public ligaChangeAction(){
    this.clearChangeAction();
    this.clubeService.getByLiga(this.ligaSelected).subscribe(
      data => {
        this.clubesItens = data;
      }
    )
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClubeTituloAno } from 'src/app/model/clube-titulo-ano.model';
import { Temporada } from 'src/app/model/temporada.model';
import { ClubeTituloAnoServiceService } from 'src/app/service/clube-titulo-ano-service.service';
import { TemporadaService } from 'src/app/service/temporada.service';
import { DefaultSortingDataAcessorUtils } from 'src/app/util/default-sorting-data-acessor.util';

@Component({
  selector: 'app-clube-titulo-ano',
  templateUrl: './clube-titulo-ano.component.html',
  styleUrls: ['./clube-titulo-ano.component.css']
})
export class ClubeTituloAnoComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['clube.nome', 'nivelCampeonato', 'ano'];

  clubeRankingDataSource: MatTableDataSource<ClubeTituloAno>;

  temporadaItens: Temporada[];

  temporadaSelected: Temporada;

  constructor(
    private clubeTituloAnoServiceService: ClubeTituloAnoServiceService,
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
    //console.log('ligaChangeAction#');
    this.clearChangeAction();
    this.clubeTituloAnoServiceService.getByAno(this.temporadaSelected.ano).subscribe(
      data => {
        this.clubeRankingDataSource = new MatTableDataSource(data);
        this.clubeRankingDataSource.sort = this.sort;
        //console.log(data);
        this.clubeRankingDataSource.sortingDataAccessor = DefaultSortingDataAcessorUtils.pathDataAccessor;
      }
    )
  }

}

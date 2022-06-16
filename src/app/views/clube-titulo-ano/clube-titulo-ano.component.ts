import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClubeRanking } from 'src/app/model/clube-ranking.model';
import { ClubeTituloAno } from 'src/app/model/clube-titulo-ano.model';
import { Temporada } from 'src/app/model/temporada.model';
import { ClubeRankingService } from 'src/app/service/clube-ranking.service';
import { TemporadaService } from 'src/app/service/temporada.service';

@Component({
  selector: 'app-clube-titulo-ano',
  templateUrl: './clube-titulo-ano.component.html',
  styleUrls: ['./clube-titulo-ano.component.css']
})
export class ClubeTituloAnoComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  //temporadaItens: Temporada[];

  //ligasItens: string[] = ['GENEBE', 'SPAPOR', 'ITAFRA', 'ENGLND'];

  displayedColumns: string[] = ['clubeNome', 'nivelCampeonato', 'ano'];

  anoItens: number[];

  clubeRankingDataSource: MatTableDataSource<ClubeTituloAno>;

  //ligaSelected: string;

  //temporadaSelected: Temporada;

  anoSelected: number;

  constructor(
    private clubeRankingService: ClubeRankingService,
    private temporadaService: TemporadaService
  ) { }

  ngOnInit(): void {
    this.getAnoClubeRankingItens();
  }

  /*public getTemporadas(){
    this.temporadaService.getTemporadas().subscribe(
      data => {
        this.temporadaItens = data;
      }
    )
  }*/

  public getAnoClubeRankingItens(){
    console.log("getAnoClubeRankingItens#");
    this.clubeRankingService.getAnoClubeRankingItens().subscribe(
      data => {
        this.anoItens = data;
      }
    )
  }

  public clearChangeAction(){
    this.clubeRankingDataSource = null;
  }

  //TODO: validar dados
  public btSearchAction(){
    console.log('ligaChangeAction#');
    this.clubeRankingService.getClubeTituloAno(this.anoSelected).subscribe(
      data => {
        this.clubeRankingDataSource = new MatTableDataSource(data);
        this.clubeRankingDataSource.sort = this.sort;
        //console.log(data);
      }
    )
    /*this.clubeRankingService.getClubesRankingLiga(this.ligaSelected).subscribe(
      data => {
        this.clubeRankingDataSource = new MatTableDataSource(data);
        this.clubeRankingDataSource.sort = this.sort;
        console.log(data);
      }
    )*/
  }

}

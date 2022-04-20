import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClubeRanking } from 'src/app/model/clube-ranking.model';
import { Temporada } from 'src/app/model/temporada.model';
import { ClubeRankingService } from 'src/app/service/clube-ranking.service';
import { TemporadaService } from 'src/app/service/temporada.service';

@Component({
  selector: 'app-clube-ranking',
  templateUrl: './clube-ranking.component.html',
  styleUrls: ['./clube-ranking.component.css']
})
export class ClubeRankingComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  temporadaItens: Temporada[];

  ligasItens: string[] = ['GENEBE', 'SPAPOR', 'ITAFRA', 'ENGLND'];

  displayedColumns: string[] = ['clubeNome', 'posicaoGeral', 'classificacaoContinental', 'classificacaoNacional', 'classificacaoCopaNacional'];

  clubeRankingDataSource: MatTableDataSource<ClubeRanking>;

  ligaSelected: string;

  temporadaSelected: Temporada;

  constructor(
    private clubeRankingService: ClubeRankingService,
    private temporadaService: TemporadaService
  ) { }

  ngOnInit(): void {
    this.getTemporadas();
  }

  public getTemporadas(){
    this.temporadaService.getTemporadas().subscribe(
      data => {
        this.temporadaItens = data;
      }
    )
  }

  //TODO: validar dados
  //TODO: melhorar seleção de ano
  public btSearchAction(){
    console.log('ligaChangeAction#');
    this.clubeRankingService.getClubesRankingLigaAno(this.ligaSelected, this.temporadaSelected.ano - 1).subscribe(
      data => {
        this.clubeRankingDataSource = new MatTableDataSource(data);
        this.clubeRankingDataSource.sort = this.sort;
        console.log(data);
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

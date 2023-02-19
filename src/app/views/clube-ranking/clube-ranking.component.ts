import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClubeRanking } from 'src/app/model/clube-ranking.model';
import { Clube } from 'src/app/model/clube.model';
import { Liga, ligas } from 'src/app/model/liga.model';
import { ClubeRankingService } from 'src/app/service/clube-ranking.service';
import { ClubeService } from 'src/app/service/clube.service';

@Component({
  selector: 'app-clube-ranking',
  templateUrl: './clube-ranking.component.html',
  styleUrls: ['./clube-ranking.component.css']
})
export class ClubeRankingComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  ligasItens: Liga[] = ligas;

  displayedColumns: string[];

  anoItens: number[];

  clubeRankingDataSource: MatTableDataSource<ClubeRanking>;

  ligaSelected: Liga;

  anoSelected: number;

  clubeSelected: Clube;

  clubesItens: Clube[];

  constructor(
    private clubeRankingService: ClubeRankingService,
    private clubeService: ClubeService
  ) { }

  ngOnInit(): void {
    this.getAnoClubeRankingItens();
  }

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
    this.clubeRankingService.getByLigaAndAno(this.ligaSelected, this.anoSelected).subscribe(
      data => {
        this.clubeRankingDataSource = new MatTableDataSource(data);
        this.clubeRankingDataSource.sort = this.sort;
      }
    )
    this.displayedColumns = ['clubeNome', 'posicaoGeral', 'classificacaoContinental', 'classificacaoNacional', 'classificacaoCopaNacional'];
  }

  //TODO: validar dados
  public clubeChangeAction(){
    console.log('ligaChangeAction#2');
    this.clubeRankingService.getByIdClube(this.clubeSelected.id).subscribe(
      data => {
        this.clubeRankingDataSource = new MatTableDataSource(data);
        this.clubeRankingDataSource.sort = this.sort;
      }
    )
    this.displayedColumns = ['clubeNome', 'ano', 'posicaoGeral', 'classificacaoContinental', 'classificacaoNacional', 'classificacaoCopaNacional'];
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

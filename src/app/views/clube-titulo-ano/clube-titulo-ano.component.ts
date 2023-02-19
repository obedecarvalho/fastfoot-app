import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClubeTituloAno } from 'src/app/model/clube-titulo-ano.model';
import { ClubeRankingService } from 'src/app/service/clube-ranking.service';

@Component({
  selector: 'app-clube-titulo-ano',
  templateUrl: './clube-titulo-ano.component.html',
  styleUrls: ['./clube-titulo-ano.component.css']
})
export class ClubeTituloAnoComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['clubeNome', 'nivelCampeonato', 'ano'];

  anoItens: number[];

  clubeRankingDataSource: MatTableDataSource<ClubeTituloAno>;

  anoSelected: number;

  constructor(
    private clubeRankingService: ClubeRankingService
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
    this.clearChangeAction();
    this.clubeRankingService.getClubeTituloAno(this.anoSelected).subscribe(
      data => {
        this.clubeRankingDataSource = new MatTableDataSource(data);
        this.clubeRankingDataSource.sort = this.sort;
        //console.log(data);
      }
    )
  }

}

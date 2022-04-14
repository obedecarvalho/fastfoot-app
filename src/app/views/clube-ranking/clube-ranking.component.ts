import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClubeRanking } from 'src/app/model/clube-ranking.model';
import { ClubeRankingService } from 'src/app/service/clube-ranking.service';

@Component({
  selector: 'app-clube-ranking',
  templateUrl: './clube-ranking.component.html',
  styleUrls: ['./clube-ranking.component.css']
})
export class ClubeRankingComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  ligasItens: string[] = ['GENEBE', 'SPAPOR', 'ITAFRA', 'ENGLND'];

  displayedColumns: string[] = ['clubeNome', 'posicaoGeral', 'classificacaoContinental', 'classificacaoNacional', 'classificacaoCopaNacional'];

  clubeRankingDataSource: MatTableDataSource<ClubeRanking>;

  ligaSelected: string;

  constructor(
    private clubeRankingService: ClubeRankingService
  ) { }

  ngOnInit(): void {
  }

  public ligaChangeAction(){
    console.log('ligaChangeAction#');
    this.clubeRankingService.getClubesRanking(this.ligaSelected).subscribe(
      data => {
        this.clubeRankingDataSource = new MatTableDataSource(data);
        this.clubeRankingDataSource.sort = this.sort;
        console.log(data);
      }
    )
  }
}

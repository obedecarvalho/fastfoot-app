import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClubeTituloRanking } from 'src/app/model/clube-titulo-ranking.model';
import { ClubeRankingService } from 'src/app/service/clube-ranking.service';
import { ClubeTituloRankingService } from 'src/app/service/clube-titulo-ranking.service';

@Component({
  selector: 'app-clube-titulos-ranking',
  templateUrl: './clube-titulos-ranking.component.html',
  styleUrls: ['./clube-titulos-ranking.component.css']
})
export class ClubeTitulosRankingComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  ligasItens: string[] = ['GENEBE', 'SPAPOR', 'ITAFRA', 'ENGLND'];

  displayedColumns: string[] = ['clubeNome', 'pontuacao', 'titulosNacional', 'titulosNacionalII', 'titulosCopaNacional', 'titulosCopaNacionalII', 'titulosContinental', 'titulosContinentalII', 'titulosContinentalIII'];

  clubeRankingDataSource: MatTableDataSource<ClubeTituloRanking>;

  ligaSelected: string;

  constructor(
    private clubeRankingService: ClubeRankingService,
    private clubeTituloRankingService: ClubeTituloRankingService
  ) { }

  ngOnInit(): void {

  }

  public clearChangeAction(){
    this.clubeRankingDataSource = null;
  }

  //TODO: validar dados
  public btSearchAction(){
    console.log('ligaChangeAction#');
    this.clearChangeAction();
    /*this.clubeRankingService.getClubesTitulosRankingLiga(this.ligaSelected).subscribe(
      data => {
        this.clubeRankingDataSource = new MatTableDataSource(data);
        this.clubeRankingDataSource.sort = this.sort;
        //console.log(data);
      }
    )*/

    if (this.ligaSelected == 'all'){
      this.clubeTituloRankingService.getAll().subscribe(
        data => {
          this.clubeRankingDataSource = new MatTableDataSource(data);
          this.clubeRankingDataSource.sort = this.sort;
          //console.log(data);
        }
      )
    } else {
      this.clubeTituloRankingService.getByLigaStr(this.ligaSelected).subscribe(
        data => {
          this.clubeRankingDataSource = new MatTableDataSource(data);
          this.clubeRankingDataSource.sort = this.sort;
          //console.log(data);
        }
      )
    }
  }

}

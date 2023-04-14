import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClubeTituloRanking } from 'src/app/model/clube-titulo-ranking.model';
import { ClubeTituloRankingService } from 'src/app/service/clube-titulo-ranking.service';
import { DefaultSortingDataAcessorUtils } from 'src/app/util/default-sorting-data-acessor.util';

@Component({
  selector: 'app-clube-titulos-ranking',
  templateUrl: './clube-titulos-ranking.component.html',
  styleUrls: ['./clube-titulos-ranking.component.css']
})
export class ClubeTitulosRankingComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  ligasItens: string[] = ['GENEBE', 'SPAPOR', 'ITAFRA', 'ENGLND'];

  displayedColumns: string[] = ['clube.nome', 'pontuacao', 'titulosNacional', 'titulosNacionalII', 'titulosCopaNacional', 'titulosCopaNacionalII', 'titulosContinental', 'titulosContinentalII', 'titulosContinentalIII'];

  clubeRankingDataSource: MatTableDataSource<ClubeTituloRanking>;

  ligaSelected: string;

  constructor(
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
    if (this.ligaSelected == 'all'){
      this.clubeTituloRankingService.getAll().subscribe(
        data => {
          this.clubeRankingDataSource = new MatTableDataSource(data);
          this.clubeRankingDataSource.sort = this.sort;
          this.clubeRankingDataSource.sortingDataAccessor = DefaultSortingDataAcessorUtils.pathDataAccessor;
          //console.log(data);
        }
      )
    } else {
      this.clubeTituloRankingService.getByLigaStr(this.ligaSelected).subscribe(
        data => {
          this.clubeRankingDataSource = new MatTableDataSource(data);
          this.clubeRankingDataSource.sort = this.sort;
          this.clubeRankingDataSource.sortingDataAccessor = DefaultSortingDataAcessorUtils.pathDataAccessor;
          //console.log(data);
        }
      )
    }
  }

}

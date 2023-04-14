import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Partida } from 'src/app/model/partida.model';
import { PartidaService } from 'src/app/service/partida.service';
import { Clube } from 'src/app/model/clube.model';
import { ClubeService } from 'src/app/service/clube.service';
import { Liga, ligas } from 'src/app/model/liga.model';
import { DefaultSortingDataAcessorUtils } from 'src/app/util/default-sorting-data-acessor.util';

@Component({
  selector: 'app-partidas-clube',
  templateUrl: './partidas-clube.component.html',
  styleUrls: ['./partidas-clube.component.css']
})
export class PartidasClubeComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['rodada.semana.numero','nivelCampeonato','rodada.numero','clubeMandante.nome','golsMandante','golsVisitante','clubeVisitante.nome'];

  partidasSource: MatTableDataSource<Partida>;

  ligasItens = ligas;

  ligaSelected: Liga;

  clubesItens: Clube[];

  clubeSelected: Clube;

  constructor(
    private partidaService: PartidaService,
    private clubeService: ClubeService
  ) { }

  ngOnInit(): void {

  }//https://stackoverflow.com/questions/48891174/angular-material-2-datatable-sorting-with-nested-objects

  public ligaChangeAction(){
    this.clubeService.getByLiga(this.ligaSelected).subscribe(
      data => {
        this.clubesItens = data;
      }
    )
  }

  public clubeChangeAction(){
    this.partidaService.getByIdClube(this.clubeSelected.id).subscribe(
      data => {
        this.partidasSource = new MatTableDataSource(data);
        this.partidasSource.sort = this.sort;
        this.partidasSource.sortingDataAccessor = DefaultSortingDataAcessorUtils.pathDataAccessor;
      }
    )
  }
}

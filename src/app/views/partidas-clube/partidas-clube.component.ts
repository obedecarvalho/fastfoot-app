import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Partida } from 'src/app/model/partida.model';
import { PartidaService } from 'src/app/service/partida.service';
import { Clube } from 'src/app/model/clube.model';
import { ClubeService } from 'src/app/service/clube.service';

@Component({
  selector: 'app-partidas-clube',
  templateUrl: './partidas-clube.component.html',
  styleUrls: ['./partidas-clube.component.css']
})
export class PartidasClubeComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['numeroSemana','nomeCampeonato','numeroRodada','nomeClubeMandante','golsMandante','golsVisitante','nomeClubeVisitante'];

  partidasSource: MatTableDataSource<Partida>;

  ligasItens: string[] = ['GENEBE', 'SPAPOR', 'ITAFRA', 'ENGLND'];

  ligaSelected: string;

  clubesItens: Clube[];

  clubeSelected: Clube;

  constructor(
    private partidaService: PartidaService,
    private clubeService: ClubeService
  ) { }

  ngOnInit(): void {

  }

  public ligaChangeAction(){
    this.clubeService.getClubesPorLiga(this.ligaSelected).subscribe(
      data => {
        this.clubesItens = data;
      }
    )
  }

  public clubeChangeAction(){
    this.partidaService.getPartidasPorClube(this.clubeSelected.idClube).subscribe(
      data => {
        this.partidasSource = new MatTableDataSource(data);
        this.partidasSource.sort = this.sort;
      }
    )
  }
}

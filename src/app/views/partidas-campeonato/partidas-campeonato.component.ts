import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Campeonato } from 'src/app/model/campeonato.model';
import { Partida } from 'src/app/model/partida.model';
import { PartidaService } from 'src/app/service/partida.service';
import { TemporadaService } from 'src/app/service/temporada.service';

@Component({
  selector: 'app-partidas-campeonato',
  templateUrl: './partidas-campeonato.component.html',
  styleUrls: ['./partidas-campeonato.component.css']
})
export class PartidasCampeonatoComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['numeroSemana','nomeCampeonato','numeroRodada','nomeClubeMandante','golsMandante','golsVisitante','nomeClubeVisitante'];

  partidasSource: MatTableDataSource<Partida>;

  nivelLigaItens: string[] = ['NACIONAL', 'COPA-NACIONAL', 'CONTINENTAL'];

  campeonatosItens: Campeonato[];

  nivelLigaSelected : string;

  campeonatoSelected: Campeonato;

  constructor(
    private partidaService: PartidaService,
    private temporadaService: TemporadaService
  ) { }

  ngOnInit(): void {

  }

  public nivelLigaChangeAction(){
    this.temporadaService.getCampeonatosTemporadaAtual(this.nivelLigaSelected).subscribe(
      data => {
        this.campeonatosItens = data;
      }
    );
  }

  public campeonatoSelectChangeAction(){
    this.partidaService.getPartidasPorCampeonato(this.campeonatoSelected.idCampeonato, this.nivelLigaSelected).subscribe(
      data => {
        this.partidasSource = new MatTableDataSource(data);
        this.partidasSource.sort = this.sort;
      }
    );
  }
}

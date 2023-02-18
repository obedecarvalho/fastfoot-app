import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Clube } from 'src/app/model/clube.model';
import { JogadorEstatisticasTemporada } from 'src/app/model/jogador-estatisticas-temporada.model';
import { Liga, ligas } from 'src/app/model/liga.model';
import { ClubeService } from 'src/app/service/clube.service';
import { JogadorEstatisticasTemporadaService } from 'src/app/service/jogador-estatisticas-temporada.service';

@Component({
  selector: 'app-jogador-estatistica',
  templateUrl: './jogador-estatistica.component.html',
  styleUrls: ['./jogador-estatistica.component.css']
})
export class JogadorEstatisticaComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  estatisticas: MatTableDataSource<JogadorEstatisticasTemporada>;

  displayedColumns: string[] = ['nomeJogador', 'posicao', 'numeroJogos', 'golsMarcados', 'assistencias', 'golsSofridos'];

  clubesItens: Clube[];

  clubeSelected: Clube;

  ligasItens: Liga[] = ligas;

  ligaSelected: Liga;

  constructor(
    private jogadorEstatisticasTemporadaService:JogadorEstatisticasTemporadaService,
    private clubeService: ClubeService
  ) { }

  ngOnInit(): void {
  }

  public ligaChangeAction(){
    this.clubeService.getByLiga(this.ligaSelected).subscribe(
      data => {
        this.clubesItens = data;
      }
    )
  }

  public clubeChangeAction(){
    this.jogadorEstatisticasTemporadaService.getByIdClube(this.clubeSelected.id).subscribe(
      data => {
        this.estatisticas = new MatTableDataSource(data);
        this.estatisticas.sort = this.sort;
      }
    );
  }
}

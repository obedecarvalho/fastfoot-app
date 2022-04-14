import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Clube } from 'src/app/model/clube.model';
import { Jogador } from 'src/app/model/jogador.model';
import { ClubeService } from 'src/app/service/clube.service';
import { JogadorService } from 'src/app/service/jogador.service';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['nomeJogador', 'posicao', 'numero'];

  jogadoresDataSource: MatTableDataSource<Jogador>;

  clubesItens: Clube[];

  clubeSelected: Clube;

  ligasItens: string[] = ['GENEBE', 'SPAPOR', 'ITAFRA', 'ENGLND'];

  ligaSelected: string;

  constructor(
    private jogadorService: JogadorService,
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
    this.jogadorService.getJogadoresPorClube(this.clubeSelected.idClube).subscribe(
      data => {
        this.jogadoresDataSource = new MatTableDataSource(data);
        this.jogadoresDataSource.sort = this.sort;
        console.log(data);
      }
    )
  }
}

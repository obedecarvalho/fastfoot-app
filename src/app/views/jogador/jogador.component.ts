import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Clube } from 'src/app/model/clube.model';
import { Jogador } from 'src/app/model/jogador.model';
import { Liga, ligas } from 'src/app/model/liga.model';
import { ClubeService } from 'src/app/service/clube.service';
import { JogadorService } from 'src/app/service/jogador.service';
import { DefaultSortingDataAcessorUtils } from 'src/app/util/default-sorting-data-acessor.util';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['nome', 'posicao', 'numero', 'idade', 'forcaGeral', 'valorTransferencia'];

  jogadoresDataSource: MatTableDataSource<Jogador>;

  clubesItens: Clube[];

  clubeSelected: Clube;

  ligasItens: Liga[] = ligas;

  ligaSelected: Liga;

  constructor(
    private jogadorService: JogadorService,
    private clubeService: ClubeService
  ) { }

  ngOnInit(): void {
  }

  public ligaChangeAction(){
    this.clear();
    this.clubeService.getByLiga(this.ligaSelected).subscribe(
      data => {
        this.clubesItens = data;
      }
    )
  }

  public clubeChangeAction(){
    this.clear();
    this.jogadorService.getByClube(this.clubeSelected).subscribe(
      data => {
        this.jogadoresDataSource = new MatTableDataSource(data);
        this.jogadoresDataSource.sort = this.sort;
        //console.log(data);
        //this.jogadoresDataSource.sortingDataAccessor = DefaultSortingDataAcessorUtils.pathDataAccessor;
      }
    )
  }

  public clear(){
    this.jogadoresDataSource = null;
  }
}

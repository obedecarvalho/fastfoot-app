import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Artilharia } from 'src/app/model/artilharia.model';

import { ArtilhariaService } from 'src/app/service/artilharia.service';
import { DefaultSortingDataAcessorUtils } from 'src/app/util/default-sorting-data-acessor.util';

@Component({
  selector: 'app-jogador-artilheiro',
  templateUrl: './jogador-artilheiro.component.html',
  styleUrls: ['./jogador-artilheiro.component.css']
})
export class JogadorArtilheiroComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  estatisticas: MatTableDataSource<Artilharia>;

  displayedColumns: string[] = ['jogador.nome', 'jogador.clube.nome', 'qtdeGols'];

  constructor(private artilhariaService: ArtilhariaService) { }

  ngOnInit(): void {

    this.artilhariaService.getByTemporadaAtual().subscribe(
      data => {
        this.estatisticas = new MatTableDataSource(data);
        this.estatisticas.sort = this.sort;
        this.estatisticas.sortingDataAccessor = DefaultSortingDataAcessorUtils.pathDataAccessor;
      }
    )
  }

}

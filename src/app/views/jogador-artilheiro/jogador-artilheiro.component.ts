import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Artilharia } from 'src/app/model/artilharia.model';

import { ArtilhariaService } from 'src/app/service/artilharia.service';

@Component({
  selector: 'app-jogador-artilheiro',
  templateUrl: './jogador-artilheiro.component.html',
  styleUrls: ['./jogador-artilheiro.component.css']
})
export class JogadorArtilheiroComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  estatisticas: MatTableDataSource<Artilharia>;

  displayedColumns: string[] = ['nomeJogador', 'nomeClube', 'qtdeGols'];

  constructor(private artilhariaService: ArtilhariaService) { }

  ngOnInit(): void {

    this.artilhariaService.getByTemporadaAtual().subscribe(
      data => {
        this.estatisticas = new MatTableDataSource(data);
        this.estatisticas.sort = this.sort;
      }
    )
  }

}

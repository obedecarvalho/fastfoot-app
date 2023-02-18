import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClubeResumoTemporada } from 'src/app/model/clube-resumo-temporada.model';
import { Clube } from 'src/app/model/clube.model';
import { Liga, ligas } from 'src/app/model/liga.model';
import { ClubeResumoTemporadaService } from 'src/app/service/clube-resumo-temporada.service';
import { ClubeService } from 'src/app/service/clube.service';

@Component({
  selector: 'app-clube-resumo-temporada',
  templateUrl: './clube-resumo-temporada.component.html',
  styleUrls: ['./clube-resumo-temporada.component.css']
})
export class ClubeResumoTemporadaComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  estatisticas: MatTableDataSource<ClubeResumoTemporada>;

  displayedColumns: string[] = ['nomeClube', 'ano', 'nivelCampeonato', 'posicaoFinal', 'jogos', 'vitorias', 'empates', 'golsPro', 'golsContra'];

  clubesItens: Clube[];

  clubeSelected: Clube;

  ligasItens: Liga[] = ligas;

  ligaSelected: Liga;

  constructor(
    private clubeResumoTemporadaService:ClubeResumoTemporadaService,
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
    this.clubeResumoTemporadaService.getByIdClube(this.clubeSelected.id).subscribe(
      data => {
        this.estatisticas = new MatTableDataSource(data);
        this.estatisticas.sort = this.sort;
      }
    );
  }

}

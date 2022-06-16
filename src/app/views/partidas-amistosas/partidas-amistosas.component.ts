import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Partida } from 'src/app/model/partida.model';
import { PartidaService } from 'src/app/service/partida.service';

@Component({
  selector: 'app-partidas-amistosas',
  templateUrl: './partidas-amistosas.component.html',
  styleUrls: ['./partidas-amistosas.component.css']
})
export class PartidasAmistosasComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['numeroSemana','nomeCampeonato','numeroRodada','nomeClubeMandante','golsMandante','golsVisitante','nomeClubeVisitante'];

  partidasSource: MatTableDataSource<Partida>;

  semanaItens: number[] = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22]

  semanaSelected: number;

  constructor(
    private partidaService: PartidaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(p => {
      console.log('carregando jogos semana');
      if (p['semana'] != null){
        this.semanaSelected = p['semana'];
        this.semanaChangeAction();
      }
    })
  }

  public semanaChangeAction(){
    this.partidasSource = null;
    this.partidaService.getPartidasAmistosasPorSemana(this.semanaSelected).subscribe(
      data => {
        this.partidasSource = new MatTableDataSource(data);
        this.partidasSource.sort = this.sort;
      }
    )
  }

}

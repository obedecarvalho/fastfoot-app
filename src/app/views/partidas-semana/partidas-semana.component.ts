import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Partida } from 'src/app/model/partida.model';
import { PartidaService } from 'src/app/service/partida.service';

@Component({
  selector: 'app-partidas-semana',
  templateUrl: './partidas-semana.component.html',
  styleUrls: ['./partidas-semana.component.css']
})
export class PartidasSemanaComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['numeroSemana','nomeCampeonato','numeroRodada','nomeClubeMandante','golsMandante','golsVisitante','nomeClubeVisitante'];

  partidasSource: MatTableDataSource<Partida>;

  semanaItens: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

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
    this.partidaService.getPartidasPorSemana(this.semanaSelected).subscribe(
      data => {
        this.partidasSource = new MatTableDataSource(data);
        this.partidasSource.sort = this.sort;
      }
    )
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Campeonato } from 'src/app/model/campeonato.model';
import { Classificacao } from 'src/app/model/classificacao.model';
import { CampeonatoService } from 'src/app/service/campeonato.service';
import { ClassificacaoService } from 'src/app/service/classificacao.service';

@Component({
  selector: 'app-classificacao-nacional',
  templateUrl: './classificacao-nacional.component.html',
  styleUrls: ['./classificacao-nacional.component.css']
})
export class ClassificacaoNacionalComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['posicao', 'nomeClube', 'jogos', 'pontos', 'vitorias', 'empates', 'derrotas', 'saldoGols', 'golsPro', 'golsContra'];

  classificacoesSource: MatTableDataSource<Classificacao>;

  campeonatosItens: Campeonato[];

  campeonatoSelected: Campeonato;

  constructor(
    private classificacaoService: ClassificacaoService,
    private campeonatoService: CampeonatoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCampeonatos();
  }

  public getCampeonatos(){
    this.campeonatoService.getNacionalByTemporadaAtual().subscribe(
      data => {
        this.campeonatosItens = data;
      }
    );
  }

  public campeonatoChangeAction(){
    this.classificacaoService.getByIdCampeonato(this.campeonatoSelected.id).subscribe(
      data => {
        this.classificacoesSource = new MatTableDataSource<Classificacao>(data);
        this.classificacoesSource.sort = this.sort;
      }
    )
  }

}

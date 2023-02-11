import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PropostaTransferenciaJogador } from 'src/app/model/proposta-transferencia-jogador.model';
import { PropostaTransferenciaJogadorService } from 'src/app/service/proposta-transferencia-jogador.service';

@Component({
  selector: 'app-transferecia-jogador',
  templateUrl: './transferecia-jogador.component.html',
  styleUrls: ['./transferecia-jogador.component.css']
})
export class TransfereciaJogadorComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  transferencias: MatTableDataSource<PropostaTransferenciaJogador>;

  displayedColumns: string[] = ['nomeJogador', 'origem', 'destino', 'valor'];

  constructor(private propostaTransferenciaJogadorService:PropostaTransferenciaJogadorService) { }

  ngOnInit(): void {
    this.propostaTransferenciaJogadorService.getPropostaAceita().subscribe(
      data => {
        this.transferencias = new MatTableDataSource(data);
        this.transferencias.sort = this.sort;
      }
    );
  }

}

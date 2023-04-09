import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clube } from 'src/app/model/clube.model';
import { EscalacaoClube } from 'src/app/model/escalacao-clube.model';
import { EscalacaoJogador } from 'src/app/model/escalacao-jogador.model';
import { Liga, ligas } from 'src/app/model/liga.model';
import { ClubeService } from 'src/app/service/clube.service';
import { EscalacaoService } from 'src/app/service/escalacao.service';

@Component({
  selector: 'app-escalacao',
  templateUrl: './escalacao.component.html',
  styleUrls: ['./escalacao.component.css']
})
export class EscalacaoComponent implements OnInit {

  clubesItens: Clube[];

  clubeSelected: Clube;

  ligasItens: Liga[] = ligas;

  escalacaoDes = [
    {escPos: 0, escDesc: 'GOL'},
    {escPos: 1, escDesc: 'LD'},
    {escPos: 2, escDesc: 'ZD'},
    {escPos: 3, escDesc: 'ZE'},
    {escPos: 4, escDesc: 'LE'},
    {escPos: 5, escDesc: 'VD'},
    {escPos: 6, escDesc: 'VE'},
    {escPos: 7, escDesc: 'MD'},
    {escPos: 8, escDesc: 'ME'},
    {escPos: 9, escDesc: 'AD'},
    {escPos: 10, escDesc: 'AE'}
  ];

  escalacaoDesRes = [
    {escPos: 11, escDesc: 'RES'},
    {escPos: 12, escDesc: 'RES'},
    {escPos: 13, escDesc: 'RES'},
    {escPos: 14, escDesc: 'RES'},
    {escPos: 15, escDesc: 'RES'},
    {escPos: 16, escDesc: 'RES'}
  ];

  ligaSelected: Liga;

  //escalacao: EscalacaoClube;

  escalacaoTitular: EscalacaoJogador[];

  escalacaoReserva: EscalacaoJogador[];

  escalacaoSuplente: EscalacaoJogador[];

  //mensagemErro: string;

  constructor(
    private escalacaoService: EscalacaoService, 
    private clubeService: ClubeService,
    private _snackBar: MatSnackBar
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
    this.escalacaoService.getEscalacaoClube(this.clubeSelected).subscribe(
      data => {
        this.escalacaoTitular = data.escalacaoTitular;
        this.escalacaoReserva = data.escalacaoReserva;
        this.escalacaoSuplente = data.escalacaoSuplente;
        //console.log(data);
      }
    )
  }

  public salvar(){
    console.log('salvar');
    this._snackBar.open("Ainda não implementado...", "OK", {duration: 5000});
    /*var escalacaoClube = new EscalacaoClube();
    escalacaoClube.escalacaoTitular = this.escalacaoTitular;
    escalacaoClube.escalacaoReserva = this.escalacaoReserva;
    escalacaoClube.escalacaoSuplente = this.escalacaoSuplente;
    this.escalacaoService.salvarEscalacaoClube(this.clubeSelected, escalacaoClube).subscribe(data => {console.log(data)});*/
  }

  public drop(event: CdkDragDrop<EscalacaoJogador[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      if (event.container.id == '_titular' && event.container.data.length >= 11){
        //this.mensagemErro = "Titulares está completo";
        this._snackBar.open("Titulares está completo", "OK", {duration: 5000})
        return;
      }

      if (event.container.id == '_reserva' && event.container.data.length >= 6){
        //this.mensagemErro = "Reservas está completo";
        this._snackBar.open("Reservas está completo", "OK", {duration: 5000})
        return;
      }

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    if (event.container.id == '_titular'){
      for (let index = 0; index < event.container.data.length; index++) {
        event.container.data[index].escalacao = this.escalacaoDes[index].escPos;
        event.container.data[index].escalacaoDesc = this.escalacaoDes[index].escDesc;
      }
    }

    if (event.container.id == '_reserva'){
      for (let index = 0; index < event.container.data.length; index++) {
        event.container.data[index].escalacao = this.escalacaoDesRes[index].escPos;
        event.container.data[index].escalacaoDesc = this.escalacaoDesRes[index].escDesc;
      }
    }

    if (event.container.id == '_suplente'){
      for (let index = 0; index < event.container.data.length; index++) {
        event.container.data[index].escalacao = 17;
        event.container.data[index].escalacaoDesc = 'SUP';
      }
    }

  }
}

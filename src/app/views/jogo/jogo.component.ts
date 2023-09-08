import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/model/jogo.model';
import { JogoService } from 'src/app/service/jogo.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  jogos: Jogo[];

  jogoSelected: Jogo;

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {

    this.jogoService.getAll().subscribe( data => {
      this.jogos = data;
    });
  }

  public onChangeActionJogo(){
    this.jogoService.jogoSelected = this.jogoSelected;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartidaService } from 'src/app/service/partida.service';
import { TemporadaService } from 'src/app/service/temporada.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
//https://balta.io/blog/angular-rotas-guardas-navegacao
export class InicioComponent implements OnInit {

  constructor(
    private partidaService: PartidaService,
    private temporadaService: TemporadaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public jogarPartidas(): void {
    console.log("jogarPartidas")
    this.partidaService.jogarPartidas().subscribe( data => {
      console.log('Semana:' + data.numero);
      this.router.navigate(['/partidasSemana'], {queryParams : {semana: data.numero}});
    });
  }

  public novaTemporada(): void {
    console.log("novaTemporada")
    this.temporadaService.novaTemporada().subscribe( data => {
      console.log('Temporada:' + data.ano);
    });
  }
}

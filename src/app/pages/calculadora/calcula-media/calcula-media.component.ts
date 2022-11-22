import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrls: ['./calcula-media.component.css']
})
export class CalculaMediaComponent implements OnInit {

  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  resultado: number = 0;
  aprovacao: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  calcular(): void {
    this.resultado = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    if(this.resultado >= 5)
      this.aprovacao = "aprovado";
    else
      this.aprovacao = "reprovado";
  }
}

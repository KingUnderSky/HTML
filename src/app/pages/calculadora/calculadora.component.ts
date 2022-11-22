import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  valor1: number = 0;
  valor2: number = 0;

  operador: string = "+";
  resultado: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  calcular(): void {
    switch(this.operador) {
      case "+":
        this.resultado = this.valor1 + this.valor2;
        break;
      case "-":
        this.resultado = this.valor1 - this.valor2;
        break;
      case "*":
        this.resultado = this.valor1 * this.valor2;
        break;
      case "/":
        this.resultado = this.valor1 / this.valor2;
        break;
      default:
        this.resultado = 0;
        break;
    }
  }

}

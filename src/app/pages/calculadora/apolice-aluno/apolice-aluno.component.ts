import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apolice-aluno',
  templateUrl: './apolice-aluno.component.html',
  styleUrls: ['./apolice-aluno.component.css']
})
export class ApoliceAlunoComponent implements OnInit {

  idade:number = 0;
  nomeSegurado:string = "";
  valorAutomovel:number = 0;
  sexo:string = "";
  formulario: FormGroup = new FormGroup({}, {});

  valorApolice:number = 0

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      idade: ['',  [Validators.required]],
      sexo: ['',  [Validators.required]],
      nomeSegurado: ['',  [Validators.required]],
      valorAutomovel: ['',  [Validators.required]],
      valorApolice: ['',  [Validators.required]]
    });
  }

  calcularApolice(){
    if(this.sexo === "masculino" && this.idade <= 25)
      this.valorApolice = (this.valorAutomovel * 0.15);
    else if(this.sexo === "masculino" && this.idade > 25)
      this.valorApolice = (this.valorAutomovel * 0.1);
    else
      this.valorApolice = (this.valorAutomovel * 0.08);
  }
}

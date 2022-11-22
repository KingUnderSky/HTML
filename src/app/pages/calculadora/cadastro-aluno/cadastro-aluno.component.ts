import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {


  nome: string = "";
  ra: string = "";
  email: string = "";
  celular: string = "";

  formAluno: boolean = false;

  @Input() num1 : number=3;
  @Output() num1Change = new EventEmitter<number>();
  inativo : boolean = false;
  estiloBotao : string = "btn btn-primary"
  formulario: FormGroup = new FormGroup({}, {});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['',  [Validators.required]],
      ra: ['',  [Validators.required]],
      email: ['',  [Validators.required]],
      celular: ['',  [Validators.required]]
    });
  }
}

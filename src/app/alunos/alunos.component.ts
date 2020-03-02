import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos no titulo';

  public alunos = [
    {id: 1 , nome: 'Fabio', sobrenome: 'Galante', telefone: '907518874'},
    {id: 2 , nome: 'Carlos', sobrenome: 'Ferreira', telefone: '458751974'},
    {id: 3 , nome: 'Estela', sobrenome: 'Fonseca', telefone: '985100258'},
    {id: 4 , nome: 'Isabella', sobrenome: 'Mans', telefone: '515782399'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';

  public alunos = [
    { nome: 'Fabio' },
    { nome: 'Carlos' },
    { nome: 'Estela' },
    { nome: 'Isabella' },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}

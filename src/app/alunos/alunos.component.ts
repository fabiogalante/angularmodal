import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos no titulo';

  public alunos = [
    {nome: 'Fabio'},
    {nome: 'Carlos'},
    {nome: 'Estela'},
    {nome: 'Isabella'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

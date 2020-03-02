import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-professores",
  templateUrl: "./professores.component.html",
  styleUrls: ["./professores.component.css"]
})
export class ProfessoresComponent implements OnInit {
  titulo = "Professores";


  public professores = [
    { id: 1, nome: "Rita", disciplina: "matematica" },
    { id: 2, nome: "Cecília", disciplina: "fisica" },
    { id: 3, nome: "Hanna", disciplina: "quimica" },
    { id: 4, nome: "Julia", disciplina: "historia" }
  ];

  constructor() {}

  ngOnInit() {}
}

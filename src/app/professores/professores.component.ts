import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-professores",
  templateUrl: "./professores.component.html",
  styleUrls: ["./professores.component.css"]
})
export class ProfessoresComponent implements OnInit {
  titulo = "Professores";k

  public professores = [
    { nome: "Rita" },
    { nome: "Cecília" },
    { nome: "Hanna" },
    { nome: "Julia" }
  ];

  constructor() {}

  ngOnInit() {}
}

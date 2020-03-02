import { Aluno } from "./../models/Aluno";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap";

@Component({
  selector: "app-alunos",
  templateUrl: "./alunos.component.html",
  styleUrls: ["./alunos.component.css"]
})
export class AlunosComponent implements OnInit {
  public alunoForm: FormGroup;

  public titulo = "Alunos";
  public alunoSelecionado: Aluno;
  public variavelSimples: string;
  public modalRef: BsModalRef;

  public alunos = [
    { id: 1, nome: "Fabio", sobrenome: "Galante", telefone: "907518874" },
    { id: 2, nome: "Carlos", sobrenome: "Ferreira", telefone: "458751974" },
    { id: 3, nome: "Estela", sobrenome: "Fonseca", telefone: "985100258" },
    { id: 4, nome: "Isabella", sobrenome: "Mans", telefone: "515782399" }
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
  }

  ngOnInit(): void {}

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno) {
    console.log(aluno);
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }
}

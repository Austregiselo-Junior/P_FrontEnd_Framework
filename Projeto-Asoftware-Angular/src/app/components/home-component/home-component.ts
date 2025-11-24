import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPacienteModalComponent } from '../add-paciente-modal.component/add-paciente-modal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule, AddPacienteModalComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  constructor(private router: Router) {}

  pacientes = [
    {
      nome: "Austregíselo Junior",
      telefone: "83998905011",
      consulta: "26/10/2024 às 08:12"
    },
  ];

  @ViewChild(AddPacienteModalComponent) dialog!: AddPacienteModalComponent;

  abrirDialog() {
    this.dialog.open();
  }

  adicionarPaciente(paciente: any) {
    this.pacientes.push(paciente);
  }

  atualizarPaciente(pacienteAtualizado: any) {
  if (this.pacienteEditandoIndex !== null) {
    this.pacientes[this.pacienteEditandoIndex] = pacienteAtualizado;
    this.pacienteEditandoIndex = null;
  }
}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  deletarPaciente(index: number) {
    this.pacientes.splice(index, 1);
  }

  pacienteEditandoIndex: number | null = null;

  editarPaciente(index: number) {
    this.pacienteEditandoIndex = index;

    // Preenche o modal com os dados do paciente
    this.dialog.paciente = { ...this.pacientes[index] };
    this.dialog.modoEdicao = true;

    this.dialog.open();
  }
}


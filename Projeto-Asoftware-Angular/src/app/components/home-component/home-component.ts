import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPacienteModalComponent } from '../add-paciente-modal.component/add-paciente-modal.component';
import { EditPacientModalComponent } from '../edit-pacient-modal.component/edit-pacient-modal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule, AddPacienteModalComponent, EditPacientModalComponent],
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

  @ViewChild(AddPacienteModalComponent) addDialog!: AddPacienteModalComponent;
  @ViewChild(EditPacientModalComponent) editDialog!: EditPacientModalComponent;

  abrirDialog() {
    this.addDialog.open();
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

  navigateToLand() {
    this.router.navigate(['/land']);
  }

  deletarPaciente(index: number) {
    this.pacientes.splice(index, 1);
  }

  pacienteEditandoIndex: number | null = null;

  editarPaciente(index: number) {
    this.pacienteEditandoIndex = index;
    // Preenche o modal de edição com os dados do paciente
    this.editDialog.paciente = { ...this.pacientes[index] };

    this.editDialog.open();
  }
}


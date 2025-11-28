import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-paciente-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-pacient-modal.component.html',
  styleUrl: './edit-pacient-modal.component.css',
})
export class EditPacientModalComponent {
  isOpen = false;

  paciente = {
    nome: '',
    telefone: '',
    consulta: ''
  };

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  save() {
    console.log('Paciente salvo (edit):', this.paciente);
    this.pacienteEditado.emit(this.paciente);

    // Fecha o modal e reseta os campos
    this.close();
    this.paciente = { nome: '', telefone: '', consulta: '' };
  }

  @Output() pacienteEditado = new EventEmitter<any>();

  isFormValid(): boolean {
    return this.paciente.nome.trim() !== '' &&
      this.paciente.telefone.trim() !== '' &&
      this.paciente.consulta.trim() !== '';
  }
}


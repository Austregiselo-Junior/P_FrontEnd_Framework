import { Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-paciente-modal',
  templateUrl: './add-paciente-modal.component.html',
  styleUrl: './add-paciente-modal.component.css',
  imports: [CommonModule, FormsModule]
})
export class AddPacienteModalComponent {
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
    console.log('Paciente salvo:', this.paciente);
    this.pacienteAdicionado.emit(this.paciente);

    // Fecha o modal e reseta os campos
    this.close();
    this.paciente = { nome: '', telefone: '', consulta: '' };
  }

  @Output() pacienteAdicionado = new EventEmitter<any>();
  
  isFormValid(): boolean {
    return this.paciente.nome.trim() !== '' &&
      this.paciente.telefone.trim() !== '' &&
      this.paciente.consulta.trim() !== '';
  }
}


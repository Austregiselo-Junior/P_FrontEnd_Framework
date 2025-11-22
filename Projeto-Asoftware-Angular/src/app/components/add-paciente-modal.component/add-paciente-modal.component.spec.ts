import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPacienteModalComponent } from './add-paciente-modal.component';

describe('AddPacienteModalComponent', () => {
  let component: AddPacienteModalComponent;
  let fixture: ComponentFixture<AddPacienteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPacienteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPacienteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

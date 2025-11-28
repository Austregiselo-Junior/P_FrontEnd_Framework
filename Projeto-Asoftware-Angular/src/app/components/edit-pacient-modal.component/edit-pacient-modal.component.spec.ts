import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPacientModalComponent } from './edit-pacient-modal.component';

describe('EditPacientModalComponent', () => {
  let component: EditPacientModalComponent;
  let fixture: ComponentFixture<EditPacientModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPacientModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPacientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

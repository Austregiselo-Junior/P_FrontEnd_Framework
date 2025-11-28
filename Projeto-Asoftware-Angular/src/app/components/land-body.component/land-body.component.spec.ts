import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandBodyComponent } from './land-body.component';

describe('LandBodyComponent', () => {
  let component: LandBodyComponent;
  let fixture: ComponentFixture<LandBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

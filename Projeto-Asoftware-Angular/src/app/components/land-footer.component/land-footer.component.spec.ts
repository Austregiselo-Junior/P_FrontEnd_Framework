import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandFooterComponent } from './land-footer.component';

describe('LandFooterComponent', () => {
  let component: LandFooterComponent;
  let fixture: ComponentFixture<LandFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

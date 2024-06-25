import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspressomachinesComponent } from './espressomachines.component';

describe('EspressomachinesComponent', () => {
  let component: EspressomachinesComponent;
  let fixture: ComponentFixture<EspressomachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspressomachinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspressomachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

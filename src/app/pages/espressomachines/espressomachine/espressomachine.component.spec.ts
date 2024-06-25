import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspressomachineComponent } from './espressomachine.component';

describe('EspressomachineComponent', () => {
  let component: EspressomachineComponent;
  let fixture: ComponentFixture<EspressomachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspressomachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspressomachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

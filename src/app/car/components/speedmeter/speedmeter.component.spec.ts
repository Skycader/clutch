import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedmeterComponent } from './speedmeter.component';

describe('SpeedmeterComponent', () => {
  let component: SpeedmeterComponent;
  let fixture: ComponentFixture<SpeedmeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeedmeterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

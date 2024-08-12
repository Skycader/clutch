import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClutchComponent } from './clutch.component';

describe('ClutchComponent', () => {
  let component: ClutchComponent;
  let fixture: ComponentFixture<ClutchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClutchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClutchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

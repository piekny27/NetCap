import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopDetailsComponent } from './laptop-details.component';

describe('LaptopDetailsComponent', () => {
  let component: LaptopDetailsComponent;
  let fixture: ComponentFixture<LaptopDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

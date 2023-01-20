import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiComponent } from './rest-api.component';

describe('RestApiComponent', () => {
  let component: RestApiComponent;
  let fixture: ComponentFixture<RestApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaranimationComponent } from './caranimation.component';

describe('CaranimationComponent', () => {
  let component: CaranimationComponent;
  let fixture: ComponentFixture<CaranimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaranimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaranimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

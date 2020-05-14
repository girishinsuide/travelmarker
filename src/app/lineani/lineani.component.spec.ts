import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaniComponent } from './lineani.component';

describe('LineaniComponent', () => {
  let component: LineaniComponent;
  let fixture: ComponentFixture<LineaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

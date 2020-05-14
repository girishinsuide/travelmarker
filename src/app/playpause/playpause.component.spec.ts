import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaypauseComponent } from './playpause.component';

describe('PlaypauseComponent', () => {
  let component: PlaypauseComponent;
  let fixture: ComponentFixture<PlaypauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaypauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaypauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

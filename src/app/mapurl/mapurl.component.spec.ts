import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapurlComponent } from './mapurl.component';

describe('MapurlComponent', () => {
  let component: MapurlComponent;
  let fixture: ComponentFixture<MapurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

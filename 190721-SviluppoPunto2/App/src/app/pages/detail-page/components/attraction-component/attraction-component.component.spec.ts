import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionComponentComponent } from './attraction-component.component';

describe('AttractionComponentComponent', () => {
  let component: AttractionComponentComponent;
  let fixture: ComponentFixture<AttractionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttractionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

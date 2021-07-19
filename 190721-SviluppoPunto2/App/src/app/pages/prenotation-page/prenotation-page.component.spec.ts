import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotationPageComponent } from './prenotation-page.component';

describe('PrenotationPageComponent', () => {
  let component: PrenotationPageComponent;
  let fixture: ComponentFixture<PrenotationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrenotationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

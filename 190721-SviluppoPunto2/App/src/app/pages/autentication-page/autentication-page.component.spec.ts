import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticationPageComponent } from './autentication-page.component';

describe('AutenticationPageComponent', () => {
  let component: AutenticationPageComponent;
  let fixture: ComponentFixture<AutenticationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutenticationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

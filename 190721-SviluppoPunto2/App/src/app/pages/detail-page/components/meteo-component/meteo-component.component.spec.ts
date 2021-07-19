import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoComponentComponent } from './meteo-component.component';

describe('MeteoComponentComponent', () => {
  let component: MeteoComponentComponent;
  let fixture: ComponentFixture<MeteoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

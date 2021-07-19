import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellistPageComponent } from './travellist-page.component';

describe('TravellistPageComponent', () => {
  let component: TravellistPageComponent;
  let fixture: ComponentFixture<TravellistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellistPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

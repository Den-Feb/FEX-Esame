import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfolocationComponentComponent } from './infolocation-component.component';

describe('InfolocationComponentComponent', () => {
  let component: InfolocationComponentComponent;
  let fixture: ComponentFixture<InfolocationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfolocationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfolocationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

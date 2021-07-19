import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritelistPageComponent } from './favoritelist-page.component';

describe('FavoritelistPageComponent', () => {
  let component: FavoritelistPageComponent;
  let fixture: ComponentFixture<FavoritelistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritelistPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritelistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

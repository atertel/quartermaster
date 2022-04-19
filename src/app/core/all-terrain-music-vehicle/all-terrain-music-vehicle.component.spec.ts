import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTerrainMusicVehicleComponent } from './all-terrain-music-vehicle.component';

describe('AllTerrainMusicVehicleComponent', () => {
  let component: AllTerrainMusicVehicleComponent;
  let fixture: ComponentFixture<AllTerrainMusicVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTerrainMusicVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTerrainMusicVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

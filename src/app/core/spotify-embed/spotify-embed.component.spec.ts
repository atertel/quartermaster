import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyEmbedComponent } from './spotify-embed.component';

describe('SpotifyEmbedComponent', () => {
  let component: SpotifyEmbedComponent;
  let fixture: ComponentFixture<SpotifyEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyEmbedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

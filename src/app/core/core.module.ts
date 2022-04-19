import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTerrainMusicVehicleComponent } from './all-terrain-music-vehicle/all-terrain-music-vehicle.component';
import { FileEmbedComponent } from './file-embed/file-embed.component';
import { SpotifyEmbedComponent } from './spotify-embed/spotify-embed.component';
import { YoutubeEmbedComponent } from './youtube-embed/youtube-embed.component';



@NgModule({
  declarations: [
    AllTerrainMusicVehicleComponent,
    FileEmbedComponent,
    SpotifyEmbedComponent,
    YoutubeEmbedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AllTerrainMusicVehicleComponent,
    FileEmbedComponent,
    SpotifyEmbedComponent,
    YoutubeEmbedComponent
  ]
})
export class CoreModule { }

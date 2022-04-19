import { Component, ComponentFactoryResolver, ComponentRef, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FileSong, SongBase, SpotifySong, YoutubeSong } from '../models/playlist';
import { SpotifyEmbedComponent } from '../spotify-embed/spotify-embed.component';
import { YoutubeEmbedComponent } from '../youtube-embed/youtube-embed.component';
import { invoke } from '@tauri-apps/api/tauri';
import { FileEmbedComponent } from '../file-embed/file-embed.component';

@Component({
  selector: 'app-all-terrain-music-vehicle',
  templateUrl: './all-terrain-music-vehicle.component.html',
  styleUrls: ['./all-terrain-music-vehicle.component.scss']
})
export class AllTerrainMusicVehicleComponent implements OnInit {

  playlist: (YoutubeSong | SpotifySong | FileSong)[] = [];

  @ViewChild('ytPlayerlayer', {read: ViewContainerRef})
  ytPlayerLayer!: ViewContainerRef;
  ytPlayer!: ComponentRef<YoutubeEmbedComponent>;

  @ViewChild('spotPlayerlayer', {read: ViewContainerRef})
  spotPlayerLayer!: ViewContainerRef;
  spotPlayer!: ComponentRef<SpotifyEmbedComponent>;

  @ViewChild('filePlayerlayer', {read: ViewContainerRef})
  filePlayerLayer!: ViewContainerRef;
  filePlayer!: ComponentRef<FileEmbedComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    invoke('unwrap_config').then((res) => {
      this.playlist = SongBase.mapConfigToPlaylist(res);
    })
    .catch(e => {
      console.error(e);
    });

    // this.playlist = [
    //   new YoutubeSong('Pathfinder Kingmaker battle music', 'https://www.youtube.com/embed/E7MG-6vp4zs', 'E7MG-6vp4zs', true),
    //   new SpotifySong('Tron, Solar Sailer', 'https://open.spotify.com/embed/track/2pnJ87yTVpkgtZh6Tq4vKh', true),
    //   new SpotifySong('Programming Playlist', 'https://open.spotify.com/embed/playlist/2mtlhuFVOFMn6Ho3JmrLc2', true),
    //   new YoutubeSong('Battle Music 3', '', '', true),
    //   new YoutubeSong('Battle Music 4', '', '', true),
    //   new YoutubeSong('Battle Music 5', '', '', true),
    // ];
  }

  ngOnInit(): void {
  }

  playMusic(song: YoutubeSong | SpotifySong | FileSong) {
    if (song instanceof YoutubeSong) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(YoutubeEmbedComponent);
      this.ytPlayer = this.ytPlayerLayer.createComponent(componentFactory);
      this.ytPlayer.instance.youtubeData = song;
      this.ytPlayer.instance.exitPlayer = () => { this.destroyYtModal() };
    }
    else if (song instanceof SpotifySong) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpotifyEmbedComponent);
      this.spotPlayer = this.spotPlayerLayer.createComponent(componentFactory);
      this.spotPlayer.instance.spotifyData = song;
      this.spotPlayer.instance.exitPlayer = () => { this.destroySpotModal() };
    }
    else if (song instanceof FileSong) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FileEmbedComponent);
      this.filePlayer = this.filePlayerLayer.createComponent(componentFactory);
      this.filePlayer.instance.fileData = song;
      this.filePlayer.instance.exitPlayer = () => { this.destroyFileModal() };
    }
  }

  hijackAudio(): void {

  }

  spawnDiscord(): void {
    
  }

  destroyYtModal() {
    this.ytPlayer.destroy();
  }

  destroySpotModal() {
    this.spotPlayer.destroy();
  }

  destroyFileModal() {
    this.filePlayer.destroy();
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SpotifySong } from '../models/playlist';

@Component({
  selector: 'app-spotify-embed',
  templateUrl: './spotify-embed.component.html',
  styleUrls: ['./spotify-embed.component.scss']
})
export class SpotifyEmbedComponent implements OnInit {

  @Input()
  spotifyData!: SpotifySong;

  spotifyUrl: string = '';

  @Output()
  closePlayerEvent = new EventEmitter<boolean>();

  safeUrl: SafeResourceUrl = '';
  constructor(private _sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.spotifyUrl = this.spotifyData.url;
    // if (this.youtubeData.loop) {
    //   this.videoUrl += '&loop=1&list=' + this.youtubeData.videoId;
    // }
    console.log(this.spotifyUrl);
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.spotifyUrl);
  }

  // instructs the parent to destroy this component
  exitPlayer(): void {
    this.closePlayerEvent.emit(true);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YoutubeSong } from '../models/playlist';


@Component({
  selector: 'app-youtube-embed',
  templateUrl: './youtube-embed.component.html',
  styleUrls: ['./youtube-embed.component.scss']
})
export class YoutubeEmbedComponent implements OnInit {

  @Input()
  youtubeData!: YoutubeSong;

  videoUrl: string = '';

  @Output()
  closePlayerEvent = new EventEmitter<boolean>();

  safeUrl: SafeResourceUrl = '';
  constructor(private _sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.videoUrl = this.youtubeData.url + '?autoplay=1';
    // if (this.youtubeData.loop) {
    //   this.videoUrl += '&loop=1&list=' + this.youtubeData.videoId;
    // }
    console.log(this.videoUrl);
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  // instructs the parent to destroy this component
  exitPlayer(): void {
    this.closePlayerEvent.emit(true);
  }

}

import { config } from "rxjs";

export class SongBase {
  platform: string;
  songName: string;
  url: string;
  loop: boolean;

  constructor(platform: string, songName: string, url: string, loop: boolean) {
    this.platform = platform;
    this.songName = songName;
    this.url = url;
    this.loop = loop;
  }

  static mapConfigToPlaylist(obj: any): (YoutubeSong | SpotifySong | FileSong)[] {
    let result: (YoutubeSong | SpotifySong | FileSong)[] = [];

    // create appropriate song class as long as they have a title, unconfigured entries have no title
    Object.values(obj).forEach((configItem: any) => {
      if (configItem.title && configItem.platform == 'youtube') {
        let yt = new YoutubeSong(configItem.title, configItem.url, configItem.yt_video_id, configItem.loops);
        result.push(yt);
      } else if (configItem.title && configItem.platform == 'spotify') {
        let spot = new SpotifySong(configItem.title, configItem.url, configItem.loops);
        result.push(spot);
      } else if (configItem.title && configItem.platform == 'local') {
        let local = new FileSong(configItem.title, configItem.url, configItem.loops, configItem.file_type);
        result.push(local);
      }
    });

    return result;
  }

}

export class YoutubeSong extends SongBase {
  videoId: string;
  icon = 'assets/youtube.svg';

  constructor(songName: string, url: string, videoId: string, loop: boolean) {
    super('youtube', songName, url, loop);
    this.videoId = videoId;
  }
}

export class SpotifySong extends SongBase {
  icon = 'assets/spotify.svg';

  constructor(songName: string, url: string, loop: boolean) {
    super('spotify', songName, url, loop);
  }
}

export class FileSong extends SongBase {
  icon = 'assets/local_file.svg';
  fileType: string;

  constructor(songName: string, url: string, loop: boolean, fileType: string) {
    super('spotify', songName, url, loop);
    this.fileType = fileType;
  }
}

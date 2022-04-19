import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileSong } from '../models/playlist';

@Component({
  selector: 'app-file-embed',
  templateUrl: './file-embed.component.html',
  styleUrls: ['./file-embed.component.scss']
})
export class FileEmbedComponent implements OnInit {

  @Input()
  fileData!: FileSong;

  sourceFile: string = '';
  fileType: string = '';

  @Output()
  closePlayerEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.sourceFile = this.fileData.url;
    this.fileType = this.fileData.fileType;
  }

  // instructs the parent to destroy this component
  exitPlayer(): void {
    this.closePlayerEvent.emit(true);
  }

}

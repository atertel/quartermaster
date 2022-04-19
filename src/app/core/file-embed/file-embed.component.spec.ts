import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileEmbedComponent } from './file-embed.component';

describe('FileEmbedComponent', () => {
  let component: FileEmbedComponent;
  let fixture: ComponentFixture<FileEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileEmbedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

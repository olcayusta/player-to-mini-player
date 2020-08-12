import { Component, ElementRef, InjectionToken, Injector, OnInit, ViewChild } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { MiniPlayerComponent } from './mini-player/mini-player.component';
import { DataService } from './data.service';

export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'video-app';
  isOpened = false;

  // copyVideo;

  // myVideo;

  state = 'normal';

  positions!: any;

  @ViewChild('videoElement', {static: true, read: ElementRef}) videoEl!: ElementRef<HTMLVideoElement>;
  @ViewChild('normalPlayer', {static: true, read: ElementRef}) normalPlayer!: ElementRef;
  @ViewChild('miniPlayer', {static: true, read: ElementRef}) miniPlayer!: ElementRef;
  @ViewChild('overlayRef', {static: true}) overlayRef!: OverlayRef;

  constructor(public overlay: Overlay, private dataService: DataService, private injector: Injector) {
    this.positions = this.overlay.position().global().bottom('24px').right('24px');
  }

  ngOnInit(): void {
    /*    this.myVideo = document.createElement('video');
        this.myVideo.src = 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4';
        setTimeout(() => {
          this.myVideo.play();
        });*/
    console.log(this.overlayRef);
  }

  onTimeUpdate(): void {
    this.dataService.setTime(this.videoEl.nativeElement.currentTime);
  }

  createInjector(dataToPass: any): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(CONTAINER_DATA, dataToPass);
    return new PortalInjector(this.injector, injectorTokens);
  }

  setNormalPlayer(): void {
    this.isOpened = true;
    this.state = 'normal';
    this.normalPlayer.nativeElement.appendChild(this.videoEl.nativeElement);
  }

  // Method 1
  addPlayerToHTMLDiv(): void {
    this.miniPlayer.nativeElement.appendChild(this.videoEl.nativeElement);
  }

  setMiniPlayer(): void {
    this.state = 'mini';

/*    const overlayRef = this.overlay.create({
      width: '360px',
      positionStrategy: this.overlay.position().global().top('24px').right('24px')
    });
    const miniPlayerPortal = new ComponentPortal(MiniPlayerComponent, null, this.createInjector({
      givenName: 'Kate',
      familyName: 'Upton'
    }));
    overlayRef.attach(miniPlayerPortal);*/
  }
}

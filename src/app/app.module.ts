import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiniPlayerComponent } from './mini-player/mini-player.component';
import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';

export const MY_TOKEN = new InjectionToken<string>('MyToken');

@NgModule({
  declarations: [
    AppComponent,
    MiniPlayerComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule
  ],
  providers: [
    {provide: MY_TOKEN, useValue: 'Hello World'},
    // {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

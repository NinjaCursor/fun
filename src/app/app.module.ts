import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageBrowserComponent } from './components/screens/gallery/image-browser/image-browser.component';
import { ImageThumbnailComponent } from './components/screens/gallery/image-thumbnail/image-thumbnail.component';
import { GalleryScreenComponent } from './components/screens/gallery/gallery-screen/gallery-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageBrowserComponent,
    ImageThumbnailComponent,
    GalleryScreenComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

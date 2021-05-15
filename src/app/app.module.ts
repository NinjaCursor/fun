import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageBrowserComponent } from './components/screens/gallery/image-browser/image-browser.component';
import { ImageThumbnailComponent } from './components/screens/gallery/image-thumbnail/image-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageBrowserComponent,
    ImageThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

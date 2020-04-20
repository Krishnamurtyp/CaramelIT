import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentvideoComponent } from './currentvideo/currentvideo.component';
import { CurrentsectionComponent } from './currentsection/currentsection.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { VideosectionComponent } from './videosection/videosection.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentvideoComponent,
    CurrentsectionComponent,
    MainpageComponent,
    VideosectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

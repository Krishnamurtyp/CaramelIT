import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentvideoComponent } from './currentvideo/currentvideo.component';
import { CurrentsectionComponent } from './currentsection/currentsection.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { VideosectionComponent } from './videosection/videosection.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { CourseService } from './services/course.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentvideoComponent,
    CurrentsectionComponent,
    MainpageComponent,
    VideosectionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

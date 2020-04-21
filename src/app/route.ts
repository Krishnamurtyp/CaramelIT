import { Routes } from '@angular/router';

import { MainpageComponent } from './mainpage/mainpage.component';
import { CurrentvideoComponent } from './currentvideo/currentvideo.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'course',     component: MainpageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component'
import {DiaryComponent} from "./diary/diary.component";
import {ProgressComponent} from "./progress/progress.component";
import {HomePageComponent} from "./home-page/home-page.component";

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'diary', component: DiaryComponent},
  { path: 'progress', component: ProgressComponent},
  { path: 'homePage', component: HomePageComponent}

];


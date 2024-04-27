import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component'

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'landingPage', component: LandingPageComponent },

];


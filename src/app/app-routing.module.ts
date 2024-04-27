import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProfileComponent } from './profile/profile.component';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {DiaryComponent} from "./diary/diary.component";

const routes: Routes = [
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'diary', component: DiaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

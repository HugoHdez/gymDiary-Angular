import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component'
import {DiaryComponent} from "./diary/diary.component";
import {ProgressComponent} from "./progress/progress.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ExercisesComponent} from "./exercises/exercises.component";
import {ExercisesByMuscleComponent} from "./exercises-by-muscle/exercises-by-muscle.component";
import {ExerciseByMuscleComponent} from "./exercise-by-muscle/exercise-by-muscle.component";

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'diary', component: DiaryComponent},
  { path: 'progress', component: ProgressComponent},
  { path: 'homePage', component: HomePageComponent},
  { path: 'exercises', component: ExercisesComponent},
  { path: 'exercisesByMuscle', component: ExercisesByMuscleComponent},
  { path: 'exerciseByMuscle', component: ExerciseByMuscleComponent}

];


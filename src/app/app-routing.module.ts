import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DataMineingChaptersComponent } from './data-mineing-chapters/data-mineing-chapters.component';
import { DataCleaningComponent } from './data-cleaning/data-cleaning.component';
import { DataCleaningQuizComponent } from './data-cleaning-quiz/data-cleaning-quiz.component';

const routes: Routes = [
  {path : '', pathMatch: 'full', redirectTo: 'home'},
  {path : 'home', component: HomeComponent},
  {path : 'dashboard', component: DashboardComponent, },
  {path : 'profile', component: ProfileComponent},
  {path : 'data-mining/data-mining-chapters', component: DataMineingChaptersComponent},
  {path : 'data-cleaning/quiz', component: DataCleaningComponent},
  {path : 'data-cleaning/quiz/start', component: DataCleaningQuizComponent},
  {path : '404', component: NotfoundComponent},
  // {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

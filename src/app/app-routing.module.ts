import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DataMineingChaptersComponent } from './data-mineing-chapters/data-mineing-chapters.component';
import { DataCleaningComponent } from './data-cleaning/data-cleaning.component';
import { DataCleaningQuizComponent } from './data-cleaning-quiz/data-cleaning-quiz.component';
import { RegistrationComponent } from './registration/registration.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LeaderboardComponentsComponent } from './leaderboard-components/leaderboard-components.component';
import { RoleComponent } from './role/role.component';
import { DataAnalystComponent } from './data-analyst/data-analyst.component';
import { DataArchitectComponent } from './data-architect/data-architect.component';
import { DataEngineerComponent } from './data-engineer/data-engineer.component';
import { StatisticianComponent } from './statistician/statistician.component';
import { MlEngineerComponent } from './ml-engineer/ml-engineer.component';
import { DataScientistComponent } from './data-scientist/data-scientist.component';

const routes: Routes = [
  {path : '', pathMatch: 'full', redirectTo: 'home'},
  {path : 'home', component: HomeComponent},
  {path : 'dashboard', component: DashboardComponent, },
  {path : 'profile', component: ProfileComponent},
  {path : 'data-mining/data-mining-chapters', component: DataMineingChaptersComponent},
  {path : 'data-cleaning/quiz', component: DataCleaningComponent},
  {path : 'data-cleaning/quiz/start', component: DataCleaningQuizComponent},
  {path : 'login', component: RegistrationComponent},
  {path : 'leaderboard/psg', component: LeaderboardComponent},
  {path : 'leaderboard', component: LeaderboardComponentsComponent},
  {path : 'role', component: RoleComponent},
  {path : 'role/data-engineer', component: DataEngineerComponent},
  {path : 'role/data-scientist', component: DataScientistComponent},
  {path : 'role/data-architect', component: DataArchitectComponent},
  {path : 'role/data-analyst', component: DataAnalystComponent},
  {path : 'role/statistician', component: StatisticianComponent},
  {path : 'role/ml-engineer', component: MlEngineerComponent},
  {path : '404', component: NotfoundComponent},
  // {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

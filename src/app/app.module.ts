import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { QuestionbankService } from './services/questionbank.service'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DataMineingChaptersComponent } from './data-mineing-chapters/data-mineing-chapters.component';
import { DataCleaningComponent } from './data-cleaning/data-cleaning.component';
import { DataCleaningQuizComponent } from './data-cleaning-quiz/data-cleaning-quiz.component';
import { RegistrationComponent } from './registration/registration.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LeaderboardComponentsComponent } from './leaderboard-components/leaderboard-components.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotfoundComponent,
    HomeComponent,
    ProfileComponent,
    DataMineingChaptersComponent,
    DataCleaningComponent,
    DataCleaningQuizComponent,
    RegistrationComponent,
    LeaderboardComponent,
    LeaderboardComponentsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ChartsModule
  ],
  providers: [QuestionbankService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { QuestionbankService } from './services/questionbank.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DataMineingChaptersComponent } from './data-mineing-chapters/data-mineing-chapters.component';
import { DataCleaningComponent } from './data-cleaning/data-cleaning.component';
import { DataCleaningQuizComponent } from './data-cleaning-quiz/data-cleaning-quiz.component';


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule
  ],
  providers: [QuestionbankService],
  bootstrap: [AppComponent]
})
export class AppModule { }

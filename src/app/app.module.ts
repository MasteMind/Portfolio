import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageDataService } from './page-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutingModule } from './routing/routing.module';
import { CurrentDesignationComponent } from './current-designation/current-designation.component';
import { EducationComponent } from './education/education.component';
import { PastVenturesComponent } from './past-ventures/past-ventures.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsWorkedOnComponent } from './projects-worked-on/projects-worked-on.component';
import { CurrentlyWorkingOnComponent } from './currently-working-on/currently-working-on.component';
import { SubmitProjectRequestsComponent } from './submit-project-requests/submit-project-requests.component';
import { RequestForClassesComponent } from './request-for-classes/request-for-classes.component';
import { AchievementsComponent } from './achievements/achievements.component';

import { LightboxModule } from 'angular2-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CurrentDesignationComponent,
    EducationComponent,
    PastVenturesComponent,
    SkillSetComponent,
    ProjectsWorkedOnComponent,
    CurrentlyWorkingOnComponent,
    SubmitProjectRequestsComponent,
    RequestForClassesComponent,
    AchievementsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    FormsModule,
    LightboxModule,
    BrowserAnimationsModule
  ],
  providers: [PageDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { CurrentDesignationComponent } from '../current-designation/current-designation.component';
import { EducationComponent } from '../education/education.component';
import { PastVenturesComponent } from '../past-ventures/past-ventures.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { ProjectsWorkedOnComponent } from '../projects-worked-on/projects-worked-on.component';
import { CurrentlyWorkingOnComponent } from '../currently-working-on/currently-working-on.component';
import { SubmitProjectRequestsComponent } from '../submit-project-requests/submit-project-requests.component';
import { RequestForClassesComponent } from '../request-for-classes/request-for-classes.component';
import { AchievementsComponent } from '../achievements/achievements.component';

const routes: Routes = [
	{path:'currentDesignation', component:CurrentDesignationComponent},
	{path:'education', component:EducationComponent},
	{path:'pastVentures', component:PastVenturesComponent},
	{path:'achievements', component:AchievementsComponent},
	{path:'skillSet', component:SkillSetComponent},
	{path:'projectsWorkedOn', component:ProjectsWorkedOnComponent},
	{path:'currentlyWorkingOn', component:CurrentlyWorkingOnComponent},
	{path:'submitProjectRequest', component:SubmitProjectRequestsComponent},
	{path:'requestForClasses', component:RequestForClassesComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }

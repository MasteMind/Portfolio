import { Component, OnInit } from '@angular/core';

import { ProjectsData } from '../projects-data';

import { PageDataService } from '../page-data.service';

@Component({
  selector: 'app-projects-worked-on',
  templateUrl: './projects-worked-on.component.html',
  styleUrls: ['./projects-worked-on.component.css'],
  providers: [PageDataService]
})
export class ProjectsWorkedOnComponent implements OnInit {
	projectsDetails: ProjectsData[];

  constructor(private pageDataService:PageDataService) { }

  getProjectsDetails(): void {
  	this.pageDataService.getData().then(data => this.projectsDetails = data['projectsWorkedOn']);
  }

  ngOnInit(): void {
  	this.getProjectsDetails();
  }

}

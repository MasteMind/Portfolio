import { Component, OnInit } from '@angular/core';

import { PageDataService } from '../page-data.service';

import { CurrentProject } from './current-project';

@Component({
  selector: 'app-currently-working-on',
  templateUrl: './currently-working-on.component.html',
  styleUrls: ['./currently-working-on.component.css'],
  providers: [PageDataService]
})
export class CurrentlyWorkingOnComponent implements OnInit {
  currentProjectDetails: CurrentProject[];

  constructor(private pageDataService:PageDataService) { }

  ngOnInit() {
  	this.getCurrentlyWorkingOnProjectDetails();
  }

  getCurrentlyWorkingOnProjectDetails(): void {
  	this.pageDataService.getData().then(data => this.currentProjectDetails = data['currentlyWorkingOn']);
  }

}

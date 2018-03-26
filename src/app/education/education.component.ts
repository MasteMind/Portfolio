import { Component, OnInit } from '@angular/core';

import { EducationData } from '../education-data';

import { PageDataService } from '../page-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [PageDataService]
})
export class EducationComponent implements OnInit {
  educationDetails: EducationData[];

  constructor(private pageDataService:PageDataService) { }

  getCurrentEducationDetails(): void {
  	this.pageDataService.getData().then(data => this.educationDetails = data['education']);
  }

  ngOnInit(): void {
  	this.getCurrentEducationDetails();
  }

}

import { Component, OnInit } from '@angular/core';

import { EventsData } from '../events-data';

import { PageDataService } from '../page-data.service';
@Component({
  selector: 'app-past-ventures',
  templateUrl: './past-ventures.component.html',
  styleUrls: ['./past-ventures.component.css'],
  providers: [PageDataService]
})
export class PastVenturesComponent implements OnInit {
  pastVentureDetails: EventsData[];

  constructor(private pageDataService:PageDataService) { }

  getPastVentureDetails(){
  	this.pageDataService.getData().then(data =>this. pastVentureDetails = data['pastVentures']);
  }

  ngOnInit() {
  	this.getPastVentureDetails();
  }

}

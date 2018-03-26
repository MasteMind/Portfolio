import { Component, OnInit } from '@angular/core';

import { EventsData } from '../events-data';

import { PageDataService } from '../page-data.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  achievementDetails: EventsData[];

  constructor(private pageDataService:PageDataService) { }

  getAchievementDetails(){
  	this.pageDataService.getData().then(data => this.achievementDetails = data['achievements']);
  }

  ngOnInit() {
  	this.getAchievementDetails();
  }

}

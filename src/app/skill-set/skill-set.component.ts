import { Component, OnInit } from '@angular/core';

import { TableData } from '../table-data';

import { PageDataService } from '../page-data.service';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css'],
  providers: [PageDataService]
})
export class SkillSetComponent implements OnInit {
	skillSetCategories: TableData[];

  	constructor(private pageDataService:PageDataService) { }

  	getSkillSetCategoriesData(): void {
  		this.pageDataService.getData().then(data => {
	        this.skillSetCategories = data['skillSets'];
      });
  	}

  	ngOnInit():void {
  		this.getSkillSetCategoriesData();
  	}

}

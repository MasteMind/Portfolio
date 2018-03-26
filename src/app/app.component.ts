import { Component, OnInit, ViewChild } from '@angular/core';

import { PageDataService } from './page-data.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	@ViewChild(DashboardComponent) dash: DashboardComponent;

	title = 'app';

	constructor(public pageDataService: PageDataService) {}

	ngOnInit():void{
		this.dash.getRouterOutletState = this.getRouterOutletState;
	}

	public getRouterOutletState(outlet) {
	  return outlet.isActivated;
	}
}

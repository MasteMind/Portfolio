import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

import { DataMap } from '../data-map';

import { PageDataService } from '../page-data.service';
import { PortfolioApiDataService } from '../portfolio-api-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PageDataService,PortfolioApiDataService],
  animations: [
    trigger('routerOutletState',[
        state('true',style({})),
        state('false', style({})),
        transition('true => false', animate('100ms ease-in')),
        transition('false => true', animate('100ms ease-out'))
      ])
  ]
})
export class DashboardComponent implements OnInit {
	menuList: DataMap[];
  bannerImg: string;
  getRouterOutletState;
  @Input() outlet;
  routerOutletState = 'false';

	constructor(
    private pageDataService:PageDataService,
    private portfolioApiDataService:PortfolioApiDataService ) {}

  	getMenuList(): void {
  		this.pageDataService.getData().then(dataMaps => this.menuList=dataMaps['menuList']);
      console.log('data:'+this.menuList);
  	}

  	ngOnInit():void {
  		this.getMenuList();
      //this.portfolioApiDataService.getDashboardData('currentResponsibilities').then(res => this.bannerImg = res);
      //$('#profilePic').css("height",parseInt($('#banner').css("height"))*0.4);
      //$('#profilePic').css("width",parseInt($('#banner').css("height"))*0.4);
      //$('#profilePic').css("margin-top",-(parseInt($('#banner').css("height"))-(parseInt($('#profilePic').css("height"))*1.6)));
  	}
}

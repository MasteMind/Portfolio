import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataMap } from './data-map';
import { TableData } from './table-data';
import { EducationData } from './education-data';
import { EventsData } from './events-data';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PageDataService {
  jsonRepoUrl:string = 'assets/pageData.json';
  jsonParentUrl:string = 'assets/';
  pageData: Promise<any>;


  constructor(private http:Http) {
    this.pageData = this.getRootData();
  }

  getRootData(): Promise<any> {
    return this.http.get(this.jsonRepoUrl)
        .toPromise()
        .then(response => response.json()['pageData'] as any)
        .catch(this.handleError);
  }

  getData(): Promise<any> {
    return this.pageData;
  }

  getDataFromFile(fileName,key): Promise<any[]> {
    return this.http.get(this.jsonParentUrl+fileName+'.json')
        .toPromise()
        .then(response => response.json()[key] as any[])
        .catch(this.handleError);
  }  

	private handleError(error: any): Promise<any> {
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}
}

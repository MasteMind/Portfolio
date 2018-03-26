import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PortfolioApiDataService {

  constructor(private http:Http) { }

  getDashboardData(keyword): Promise<string> {
  	return this.http.get('http://192.168.1.107:8080/PortfolioApi/dashboard/'+keyword)
  		.toPromise()
  		.then(response => response.text() as string)
  		.catch(this.handleError);
  }

	private handleError(error: any): Promise<any> {
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}
}

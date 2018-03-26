import { Component, OnInit } from '@angular/core';

import { ProjectRequest } from './project-request';

@Component({
  selector: 'app-submit-project-requests',
  templateUrl: './submit-project-requests.component.html',
  styleUrls: ['./submit-project-requests.component.css']
})
export class SubmitProjectRequestsComponent implements OnInit {
  submitted: boolean = false;
  model:ProjectRequest = new ProjectRequest('','',[''],new Date(),new Date,0,0);
  technologyStack: string[];

  constructor() { }

  ngOnInit() {
    this.technologyStack = ['Select','Spring Java EE MVC', 'Spring Java EE REST API','Some NodeJs Framework','AngularJs','ReactJs', 'Python']
  }

  onSubmit () { this.submitted=true; }
  
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newProjectRequest() {this.model= new ProjectRequest('','',[''],new Date(),new Date,0,0);}

  submitProjectRequest() {console.log('Hit server with the request of:'+JSON.stringify(this.model))}
}

import { Component, OnInit } from '@angular/core';

import { ClassRequest } from './class-request';

@Component({
  selector: 'app-request-for-classes',
  templateUrl: './request-for-classes.component.html',
  styleUrls: ['./request-for-classes.component.css']
})
export class RequestForClassesComponent implements OnInit {
  submitted: boolean = false;
  model:ClassRequest = new ClassRequest('',0,[''],false,false,'');
  subjects: object;
  levels: object;
  subjectKeys: string[];
  levelKeys: string[];

  constructor() { }

  ngOnInit() {
    this.subjects = {
    	'Select':'-1',
		'Mathematics':'1.0',
		'Physics':'1.0',
		'Chemistry':'1.0',
		'Biology':'1.0',
		'Computer Science':'1.0',
		'Java':'3',
		'JavaScript':'2',
		'AngularJS':'2',
		'ReactJS':'2',
		'Python':'2'
	};
	this.subjectKeys = Object.keys(this.subjects);
	this.levels = {
		1:'High School',
		2:'Higher Secondary',
		3:'Beginner',
		4:'Intermediate',
		5:'Expert'
	};
	this.levelKeys = Object.keys(this.levels);

  }

  onSubmit () { this.submitted=true; }
  
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model) }

  newClassRequest() {this.model= new ClassRequest('',0,[''],false,false,'')}

  submitProjectRequest() {console.log('Hit server with the request of:'+JSON.stringify(this.model))}
}

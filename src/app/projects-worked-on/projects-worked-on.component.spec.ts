import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsWorkedOnComponent } from './projects-worked-on.component';

describe('ProjectsWorkedOnComponent', () => {
  let component: ProjectsWorkedOnComponent;
  let fixture: ComponentFixture<ProjectsWorkedOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsWorkedOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsWorkedOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

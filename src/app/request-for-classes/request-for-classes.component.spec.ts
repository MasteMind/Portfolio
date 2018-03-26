import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForClassesComponent } from './request-for-classes.component';

describe('RequestForClassesComponent', () => {
  let component: RequestForClassesComponent;
  let fixture: ComponentFixture<RequestForClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestForClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

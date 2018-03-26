import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyWorkingOnComponent } from './currently-working-on.component';

describe('CurrentlyWorkingOnComponent', () => {
  let component: CurrentlyWorkingOnComponent;
  let fixture: ComponentFixture<CurrentlyWorkingOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentlyWorkingOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentlyWorkingOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

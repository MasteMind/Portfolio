import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDesignationComponent } from './current-designation.component';

describe('CurrentDesignationComponent', () => {
  let component: CurrentDesignationComponent;
  let fixture: ComponentFixture<CurrentDesignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentDesignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

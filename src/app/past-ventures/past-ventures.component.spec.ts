import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastVenturesComponent } from './past-ventures.component';

describe('PastVenturesComponent', () => {
  let component: PastVenturesComponent;
  let fixture: ComponentFixture<PastVenturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastVenturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastVenturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitProjectRequestsComponent } from './submit-project-requests.component';

describe('SubmitProjectRequestsComponent', () => {
  let component: SubmitProjectRequestsComponent;
  let fixture: ComponentFixture<SubmitProjectRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitProjectRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitProjectRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

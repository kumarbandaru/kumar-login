import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectresiveComponent } from './subjectresive.component';

describe('SubjectresiveComponent', () => {
  let component: SubjectresiveComponent;
  let fixture: ComponentFixture<SubjectresiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectresiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectresiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsentComponent } from './subjectsent.component';

describe('SubjectsentComponent', () => {
  let component: SubjectsentComponent;
  let fixture: ComponentFixture<SubjectsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

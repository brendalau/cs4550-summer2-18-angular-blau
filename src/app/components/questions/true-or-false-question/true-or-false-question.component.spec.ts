import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueOrFalseQuestionComponent } from './true-or-false-question.component';

describe('TrueOrFalseQuestionComponent', () => {
  let component: TrueOrFalseQuestionComponent;
  let fixture: ComponentFixture<TrueOrFalseQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueOrFalseQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueOrFalseQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

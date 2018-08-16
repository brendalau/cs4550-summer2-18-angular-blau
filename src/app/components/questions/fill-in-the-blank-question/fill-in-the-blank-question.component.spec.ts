import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInTheBlankQuestionComponent } from './fill-in-the-blank-question.component';

describe('FillInTheBlankQuestionComponent', () => {
  let component: FillInTheBlankQuestionComponent;
  let fixture: ComponentFixture<FillInTheBlankQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillInTheBlankQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillInTheBlankQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

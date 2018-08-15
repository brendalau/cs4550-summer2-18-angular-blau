import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-in-the-blank-question',
  templateUrl: './fill-in-the-blank-question.component.html',
  styleUrls: ['./fill-in-the-blank-question.component.css']
})
export class FillInTheBlankQuestionComponent implements OnInit {

  @Input() question = <any>{};

  constructor() { }

  ngOnInit() {
    this.question.fillInTheBlankAnswers = <any>{};
  }
}

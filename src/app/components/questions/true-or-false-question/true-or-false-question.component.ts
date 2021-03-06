import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-true-or-false-question',
  templateUrl: './true-or-false-question.component.html',
  styleUrls: ['./true-or-false-question.component.css']
})
export class TrueOrFalseQuestionComponent implements OnInit {

  @Input() question = <any>{};

  constructor() { }

  ngOnInit() {
    this.question.trueOrFalseAnswer = <any>{};
  }

  selected(boolean) {
    this.question.trueOrFalseAnswer = boolean;
  }
}

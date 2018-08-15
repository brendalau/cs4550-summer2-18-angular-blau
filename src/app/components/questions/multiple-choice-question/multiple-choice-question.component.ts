import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input() question = <any>{};

  constructor() { }

  ngOnInit() {
    this.question.multipleChoiceAnswer = <any>{};
  }

  selected(choice) {
    this.question.multipleChoiceAnswer = this.question.choices.indexOf(choice);
  }

}

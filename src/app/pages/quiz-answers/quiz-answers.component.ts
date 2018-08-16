import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizServiceClient } from '../../services/quiz.service.client';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  quiz = <any>{};
  submission = <any>{};

  constructor(private activatedRoute: ActivatedRoute,
              private quizService: QuizServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const quizId = params['quizId'];
      const submissionId = params['submissionId'];
      this.quizService.findQuizById(quizId)
        .then(quiz => this.quiz = quiz);
      this.quizService.findSubmissionById(quizId, submissionId)
        .then(submission => this.submission = submission);
    });
  }

  toAnswerString(string) {
    return string.replace(/["']/g, '')
      .replace(/[:]/g, ': ')
      .replace('{', '')
      .replace('}', '')
      .split(',');
  }
}

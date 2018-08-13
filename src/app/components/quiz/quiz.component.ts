import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../../services/quiz.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz = <any>{};

  constructor(private activatedRoute: ActivatedRoute,
              private quizService: QuizServiceClient) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.quizService.findQuizById(params['quizId'])
        .then(quiz => this.quiz = quiz
        );
    });
  }
}

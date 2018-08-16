import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../../services/quiz.service.client';
import { ActivatedRoute } from '@angular/router';
import { UserServiceClient } from '../../services/user.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz = <any>{};
  currentUser = <any>{};
  answers = <any>[];
  successAlert: boolean;
  userAlert: boolean;
  answersAlert: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserServiceClient,
              private quizService: QuizServiceClient) {}

  ngOnInit() {
    this.clearAlert();
    this.userService.currentUser()
      .then(user => {
        if (user) {
          this.currentUser = user;
        } else {
          this.currentUser = -1;
        }
      });

    this.activatedRoute.params.subscribe(params => {
      this.quizService.findQuizById(params['quizId'])
        .then(quiz => this.quiz = quiz);
    });
  }

  clearAlert() {
    this.successAlert = false;
    this.userAlert = false;
    this.answersAlert = false;
  }

  submit() {
    this.quiz.questions.map(question => {
      if (question.essayAnswer) {
        this.answers.push({
          question: question._id,
          essayAnswer: question.essayAnswer
        });
      } else if (question.fillInTheBlankAnswers) {
        this.answers.push({
          question: question._id,
          fillBlanksAnswer: JSON.stringify(question.fillInTheBlankAnswers),
        });
      } else if (question.multipleChoiceAnswer !== null) {
        this.answers.push({
          question: question._id,
          multipleChoiceAnswer: question.multipleChoiceAnswer
        });
      } else if (question.trueOrFalseAnswer !== null) {
        this.answers.push({
          question: question._id,
          trueFalseAnswer: question.trueOrFalseAnswer
        });
      }
    });
    if (this.quiz.questions.length === this.answers.length) {
      if (this.currentUser !== undefined) {
        const submission = {
          quiz: this.quiz,
          student: this.currentUser._id,
          answers: this.answers,
          timestamp: Date.now()
        };
        this.quizService.createSubmission(this.quiz._id, submission);
        this.successAlert = true;
        this.answers = <any>[];
      } else {
        this.userAlert = true;
      }
    } else {
      this.answersAlert = true;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizServiceClient } from '../../services/quiz.service.client';
import {UserServiceClient} from "../../services/user.service.client";

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  currentUser = <any>{};
  quiz = <any>{};
  submissions = <any>[];
  filteredSubmissions = <any>[];
  searchedUsername = '';

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserServiceClient,
              private quizService: QuizServiceClient) { }

  ngOnInit() {
    this.userService.currentUser()
      .then(user => {
        if (user) {
          this.currentUser = user;
        } else {
          this.currentUser = -1;
        }
      });
    this.activatedRoute.params.subscribe(params => {
      const quizId = params['quizId'];
      this.quizService.findQuizById(quizId)
        .then(quiz => this.quiz = quiz);
      this.quizService.findAllSubmissionsForQuiz(quizId)
        .then(submissions => {
          if (!this.currentUser.admin) {
            this.submissions = submissions.filter(submission => submission.student._id === this.currentUser._id);
          } else {
            this.submissions = submissions;
          }
          this.filteredSubmissions = this.submissions;
        });
    });
  }

  search(username) {
    const submissionsCopy = this.submissions;
    this.filteredSubmissions = submissionsCopy.filter(submission => submission.student.username === username);
  }
}

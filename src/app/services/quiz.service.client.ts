import {Injectable} from '@angular/core';

const QUIZ_API_URL = 'http://localhost:3000/api/quiz';
const QUESTION_API_URL = 'http://localhost:3000/api/question';


@Injectable()
export class QuizServiceClient {
  findAllQuizzes() {
    return fetch(QUIZ_API_URL)
      .then(response => response.json());
  }

  findQuizById(quizId) {
    return fetch(QUIZ_API_URL + '/' + quizId)
      .then(response => response.json());
  }

  findQuestionById(questionId) {
    return fetch(QUESTION_API_URL + '/' + questionId)
      .then(response => response.json());
  }

  createSubmission(quizId, submission) {
    return fetch(QUIZ_API_URL + '/' + quizId + '/submission', {
      body: JSON.stringify(submission),
      method: 'POST',
      headers: {'content-type': 'application/json'}
    });
  }

  findSubmissionById(quizId, submissionId) {
    return fetch(QUIZ_API_URL + '/' + quizId + '/submission/' + submissionId)
      .then(response => response.json());
  }

  findAllSubmissionsForQuiz(quizId) {
    return fetch(QUIZ_API_URL + '/' + quizId + '/submissions')
      .then(response => response.json());
  }
}

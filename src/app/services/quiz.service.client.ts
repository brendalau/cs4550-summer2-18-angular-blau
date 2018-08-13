import {Injectable} from '@angular/core';

const QUIZ_API_URL = 'http://localhost:3000/api/quiz';

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
}

import {Injectable} from '@angular/core';

const QUESTION_API_URL = 'http://localhost:3000/api/question';

@Injectable()
export class QuestionServiceClient {
  findQuestionById(questionId) {
    return fetch(QUESTION_API_URL + '/' + questionId)
      .then(response => response.json());
  }
}

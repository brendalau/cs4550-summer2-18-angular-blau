import {Injectable} from '@angular/core';

const COURSE_API_URL = 'https://cs4550-summer2-18-node-blau.herokuapp.com/api/course';

@Injectable()
export class CourseServiceClient {
  findAllCourses() {
    return fetch(COURSE_API_URL)
      .then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch(COURSE_API_URL + '/' + courseId)
      .then(response => response.json());
  }
}

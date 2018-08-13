import {Injectable} from '@angular/core';

const COURSE_API_URL = 'http://localhost:3000/api/course';
const SECTION_API_URL = 'http://localhost:3000/api/section';
const STUDENT_API_URL = 'http://localhost:3000/api/student';

@Injectable()
export class SectionServiceClient {
  findSectionsByCourse(courseId) {
    return fetch(COURSE_API_URL + '/' + courseId + '/section')
      .then(response => response.json());
  }

  findSectionById(sectionId) {
    return fetch(SECTION_API_URL + '/' + sectionId)
      .then(response => response.json());
  }

  createSection(courseId, section) {
     return fetch(
       COURSE_API_URL + '/' + courseId + '/section', {
        body: JSON.stringify(section),
        method: 'POST',
        headers: {'content-type': 'application/json'}});
  }

  deleteSection(sectionId) {
     return fetch(
      SECTION_API_URL + '/' + sectionId, {
        method: 'DELETE'
      });
  }

  updateSection(sectionId, section) {
     fetch(
      SECTION_API_URL + '/' + sectionId, {
        method: 'PUT',
        body: JSON.stringify(section),
        headers: {'content-type': 'application/json'}
      });
  }

  enroll(sectionId) {
    fetch(SECTION_API_URL + '/' + sectionId + '/enroll', {
      method: 'put',
      credentials: 'include'
    });
  }

  unenroll(sectionId) {
    fetch(SECTION_API_URL + '/' + sectionId + '/unenroll', {
      method: 'delete',
      credentials: 'include'
    });
  }

  findAllEnrollmentsForStudent(studentId) {
    return fetch(STUDENT_API_URL + '/' + studentId + '/section')
      .then(response => response.json());
  }

  findEnrollmentByCredentials(sectionId) {
    return fetch(SECTION_API_URL + '/' + sectionId + '/confirm')
      .then(response => response.json());
  }
}

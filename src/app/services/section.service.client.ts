import {Injectable} from '@angular/core';

const COURSE_API_URL = 'http://localhost:8080/api/course';
const SECTION_API_URL = 'http://localhost:8080/api/section';

@Injectable()
export class SectionServiceClient {
  findSectionsByCourse(courseId) {
    return fetch(COURSE_API_URL + '/' + courseId + '/sections')
      .then(response => response.json());
  }

  findSectionById(sectionId) {
    return fetch(SECTION_API_URL + '/' + sectionId)
      .then(response => response.json());
  }

  createSection(section) {
    return fetch(
      SECTION_API_URL, {
        body: JSON.stringify(section),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      })
      .then(function(response) {
        return response.json();
      });
  }

  deleteSection(sectionId) {
    return fetch(
      SECTION_API_URL + '/' + sectionId, {
        method: 'DELETE',
      })
      .then(function(response) {
        return response;
      });
  }

  updateSection(sectionId, section) {
    return fetch(
      SECTION_API_URL + '/' + sectionId, {
        method: 'PUT',
        body: JSON.stringify(section),
        headers: {'content-type': 'application/json'}
      });
  }
}

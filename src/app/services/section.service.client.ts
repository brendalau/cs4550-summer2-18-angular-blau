import {Injectable} from '@angular/core';

const COURSE_API_URL = 'http://localhost:3000/api/course';
const SECTION_API_URL = 'http://localhost:3000/api/section';

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

  createSection(section) {
     fetch(
      COURSE_API_URL + '/' + courseId + '/section', {
        body: JSON.stringify(section),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      });
  }

  deleteSection(sectionId) {
     fetch(
      SECTION_API_URL + '/' + sectionId, {
        method: 'DELETE',
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
}

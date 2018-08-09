import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceClient } from '../../services/course.service.client';
import { SectionServiceClient } from '../../services/section.service.client';

@Component({
  selector: 'app-sections-page',
  templateUrl: './sections-page.component.html',
  styleUrls: ['./sections-page.component.css']
})
export class SectionsPageComponent implements OnInit {

  courseId = String;
  course = <any>{};
  sections = <any>[];

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['courseId'];
    });
    this.courseService.findCourseById(this.courseId)
      .then(course => this.course = course);
    this.sectionService.findSectionsByCourse(this.courseId)
      .then(sections => this.sections = sections);
  }

  enroll(section) {
    if (section.available !== 0) {
      this.sectionService.enroll(section);
    }
  }

  unenroll(section) {
    if (section.available !== section.seats) {
      this.sectionService.unenroll(section);
    }
  }

  confirmEnrollment(sectionId) {
    this.sectionService.findEnrollmentByCredentials(sectionId)
      .then(response => {
        if (response == null) {
          return false;
        } else {
          return true;
        }
      });
  }
}

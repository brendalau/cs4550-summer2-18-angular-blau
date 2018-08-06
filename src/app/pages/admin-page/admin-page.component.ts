import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../../services/course.service.client';
import { SectionServiceClient } from '../../services/section.service.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  courses = [];
  selectedCourse = {};
  sections = [];

  constructor(private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient) { }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

  selectCourse(course) {
    this.selectedCourse = course;
    this.sectionService.findSectionsByCourse(this.selectedCourse.id)
      .then(sections => {
        this.sections = sections;
      });
  }

}

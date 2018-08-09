import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../../services/course.service.client';
import { SectionServiceClient } from '../../services/section.service.client';
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  courses = [];
  selectedCourse = <any>{};
  sections = [];
  selectedSection = {};

  constructor(private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient) { }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

  selectCourse(course) {
    this.selectedCourse = course;
    this.setSections();
  }

  setSections() {
    this.sectionService.findSectionsByCourse(this.selectedCourse.id)
      .then(sections => {
        this.sections = sections;
      });
  }

  selectSection(section) {
    this.selectedSection = section;
  }

  deleteSection(section) {
    this.sectionService.deleteSection(section._id)
      .then(response => this.setSections());
  }
}

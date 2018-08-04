import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../../services/course.service.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  courses = [];
  selectedCourse = {};

  constructor(private courseService: CourseServiceClient) { }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

}

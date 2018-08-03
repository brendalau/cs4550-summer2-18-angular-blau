import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CourseServiceClient} from '../../services/course.service.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  course = {};
  selectedModule = {};
  selectedLesson = {};

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseServiceClient) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
        this.courseService.findCourseById(params['courseId'])
          .then(course => this.course = course);
      });
  }

  selectModule(module) {
    this.selectedModule = module;
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }
}

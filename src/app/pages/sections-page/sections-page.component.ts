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

  course = {};
  selectedSection = {};

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.courseService.findCourseById(params['courseId'])
        .then(course => this.course = course);
    });
    // this.sectionService.findSectionsByCourse(this.course.id)
    //   .then(sections => this.sections = sections);
  }

}

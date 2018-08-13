import {Component, Input} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SectionServiceClient } from '../../../services/section.service.client';

@Component({
  selector: 'app-create-modal-component',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})

export class CreateModalComponent {

  section: {};
  title;
  seats;
  @Input() selectedCourse: {};

  constructor(private modalService: NgbModal,
              private sectionService: SectionServiceClient) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  createSection(courseId) {
    this.section = {
      courseId: courseId,
      title: this.title,
      seats: this.seats
    };
    this.sectionService.createSection(courseId, this.section);
  }
}

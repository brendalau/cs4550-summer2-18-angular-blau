import {Component, Input} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SectionServiceClient } from '../../services/section.service.client';

@Component({
  selector: 'app-create-modal-component',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent {

  closeResult: string;
  section: {};
  @Input() selectedCourse: {};

  constructor(private modalService: NgbModal,
              private sectionService: SectionServiceClient) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  createSection = section => {
    this.section.courseId = this.selectedCourse.id;
    this.sectionService.createSection(section);
}

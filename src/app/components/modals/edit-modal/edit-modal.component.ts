import { Component, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SectionServiceClient } from '../../../services/section.service.client';

@Component({
  selector: 'app-edit-modal-component',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})

export class EditModalComponent {

  @Input() selectedSection = {};

  constructor(private modalService: NgbModal,
              private sectionService: SectionServiceClient) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  updateSection(sectionId, section) {
    this.sectionService.updateSection(sectionId, section);
  }
}

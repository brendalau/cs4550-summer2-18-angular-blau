import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../../services/user.service.client';
import { SectionServiceClient } from '../../services/section.service.client';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {

  currentUser = <any>{};
  enrollments = <any>[];

  constructor(private userService: UserServiceClient,
              private sectionService: SectionServiceClient) { }

  ngOnInit() {
    this.userService.currentUser()
      .then(user => {
        this.currentUser = user;
        return this.currentUser;
      })
      .then(currentUser => {
        this.setSections(currentUser._id);
      });
  }

  setSections(userId) {
    this.sectionService.findAllEnrollmentsForStudent(userId)
      .then(enrollments => this.enrollments = enrollments);
  }

  logout() {
    this.userService.logout();
  }

  update(user) {
    this.userService.updateUser(user);
  }
}

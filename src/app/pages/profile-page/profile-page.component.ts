import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../../services/user.service.client';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  currentUser: {};s

  constructor(private userService: UserServiceClient) { }

  ngOnInit() {
    this.userService.currentUser()
      .then(user =>
        this.currentUser = user
      );
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceClient } from '../../services/user.service.client';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private router: Router, private userService: UserServiceClient) { }

  username: String;
  password: String;
  password2: String;
  fieldsAlert: boolean;
  passwordAlert: boolean;
  usernameAlert: boolean;

  ngOnInit() {
    this.clearAlerts();
  }

  clearAlerts() {
    this.fieldsAlert = false;
    this.passwordAlert = false;
    this.usernameAlert = false;
  }

  register = (username, password, password2) => {
    this.clearAlerts();

    if (username == null || password == null || password2 == null) {
      this.fieldsAlert = true;
    } else if (password !== password2) {
      this.passwordAlert = true;
    } else {
      const user = {
        username: username,
        password: password,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        admin: false
      };
      this.userService.register(user)
        .then(response => {
          if (response.status === 404) {
            this.usernameAlert = true;
          } else {
            this.router.navigate(['profile']);
          }
        });
    }
  }
}

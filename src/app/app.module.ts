import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { CourseRowComponent } from './course-row/course-row.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';


@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    CourseRowComponent,
    CourseListComponent,
    CourseViewComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

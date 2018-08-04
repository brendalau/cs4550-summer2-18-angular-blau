import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CourseViewerComponent } from './pages/course-viewer/course-viewer.component';
import { HeadingWidgetComponent } from './widgets/heading-widget/heading-widget.component';
import { ImageWidgetComponent } from './widgets/image-widget/image-widget.component';
import { LinkWidgetComponent } from './widgets/link-widget/link-widget.component';
import { ListWidgetComponent } from './widgets/list-widget/list-widget.component';
import { ParagraphWidgetComponent } from './widgets/paragraph-widget/paragraph-widget.component';
import { CourseServiceClient } from './services/course.service.client';
import { SectionsPageComponent } from './pages/sections-page/sections-page.component';
import { CreateModalComponent } from './modals/create-modal/create-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from './modals/edit-modal/edit-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    CourseListComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    AdminPageComponent,
    CourseViewerComponent,
    HeadingWidgetComponent,
    ImageWidgetComponent,
    LinkWidgetComponent,
    ListWidgetComponent,
    ParagraphWidgetComponent,
    SectionsPageComponent,
    CreateModalComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [
    CourseServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

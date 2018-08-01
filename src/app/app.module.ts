import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { CourseRowComponent } from './courses/course-row/course-row.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ModuleListItemComponent } from './modules/module-list-item/module-list-item.component';
import { ModuleListComponent } from './modules/module-list/module-list.component';
import { CourseViewerComponent } from './pages/course-viewer/course-viewer.component';
import { LessonTabComponent } from './lessons/lesson-tab/lesson-tab.component';
import { LessonTabsComponent } from './lessons/lesson-tabs/lesson-tabs.component';
import { ModuleViewerComponent } from './modules/module-viewer/module-viewer.component';
import { HeadingWidgetComponent } from './widgets/heading-widget/heading-widget.component';
import { ImageWidgetComponent } from './widgets/image-widget/image-widget.component';
import { LinkWidgetComponent } from './widgets/link-widget/link-widget.component';
import { ListWidgetComponent } from './widgets/list-widget/list-widget.component';
import { ParagraphWidgetComponent } from './widgets/paragraph-widget/paragraph-widget.component';
import { WidgetListComponent } from './widgets/widget-list/widget-list.component';


@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    CourseRowComponent,
    CourseListComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    AdminPageComponent,
    ModuleListItemComponent,
    ModuleListComponent,
    CourseViewerComponent,
    LessonTabComponent,
    LessonTabsComponent,
    ModuleViewerComponent,
    HeadingWidgetComponent,
    ImageWidgetComponent,
    LinkWidgetComponent,
    ListWidgetComponent,
    ParagraphWidgetComponent,
    WidgetListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

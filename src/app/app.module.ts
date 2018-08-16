import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CourseViewerComponent } from './pages/course-viewer/course-viewer.component';
import { HeadingWidgetComponent } from './components/widgets/heading-widget/heading-widget.component';
import { ImageWidgetComponent } from './components/widgets/image-widget/image-widget.component';
import { LinkWidgetComponent } from './components/widgets/link-widget/link-widget.component';
import { ListWidgetComponent } from './components/widgets/list-widget/list-widget.component';
import { ParagraphWidgetComponent } from './components/widgets/paragraph-widget/paragraph-widget.component';
import { CourseServiceClient } from './services/course.service.client';
import { SectionsPageComponent } from './pages/sections-page/sections-page.component';
import { CreateModalComponent } from './components/modals/create-modal/create-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from './components/modals/edit-modal/edit-modal.component';
import { UserServiceClient } from './services/user.service.client';
import { SectionServiceClient } from './services/section.service.client';
import { QuizListComponent } from './pages/quiz-list/quiz-list.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { TrueOrFalseQuestionComponent } from './components/questions/true-or-false-question/true-or-false-question.component';
import { EssayQuestionComponent } from './components/questions/essay-question/essay-question.component';
import { MultipleChoiceQuestionComponent } from './components/questions/multiple-choice-question/multiple-choice-question.component';
import { FillInTheBlankQuestionComponent } from './components/questions/fill-in-the-blank-question/fill-in-the-blank-question.component';
import { QuizServiceClient } from './services/quiz.service.client';
import { QuizSubmissionsComponent } from './pages/quiz-submissions/quiz-submissions.component';
import { QuizAnswersComponent } from './pages/quiz-answers/quiz-answers.component';

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
    EditModalComponent,
    QuizListComponent,
    QuizComponent,
    TrueOrFalseQuestionComponent,
    EssayQuestionComponent,
    MultipleChoiceQuestionComponent,
    FillInTheBlankQuestionComponent,
    QuizSubmissionsComponent,
    QuizAnswersComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    UserServiceClient,
    SectionServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

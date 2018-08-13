import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CourseViewerComponent } from './pages/course-viewer/course-viewer.component';
import { SectionsPageComponent } from './pages/sections-page/sections-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { QuizListComponent } from './pages/quiz-list/quiz-list.component';
import { QuizComponent } from './components/quiz/quiz.component';

const appRoutes: Routes = [
  { path: 'home', component: CourseListComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/sections', component: SectionsPageComponent },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quiz/:quizId', component: QuizComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
